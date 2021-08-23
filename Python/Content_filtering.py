#Since this method of filtering is text based a certain degree of NLP will be needed
#Luckily scikit-learn has some models ready for me!

import pandas as pd
import numpy as np
from sklearn.metrics.pairwise import cosine_similarity
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.feature_extraction.text import TfidfVectorizer  #Produces TF-IDF matrix, find importance of specific words.
from sklearn.metrics.pairwise import linear_kernel #LinearKernel used to calculate cosine similarity score, bcus its fast!
from fuzzywuzzy import process #For better string matching, didnt get it to work...yet

data1 = pd.read_csv("Python/data/tmdb_5000_credits.csv")
data2 = pd.read_csv("Python/data/tmdb_5000_movies.csv")

#Joining the datasets based on Id-column.
data1.columns = ["id", "title", "cast", "crew"]
data = data2.merge(data1, on="id") 

#Removing stopwords like "if, the, a, and"
TF_IDF = TfidfVectorizer(stop_words="english") 

#Fill empty spaces with "" empty string.
data["overview"] = data["overview"].fillna("") 

#create the tf-idf matrix, fit transform
TF_IDF_matrix = TF_IDF.fit_transform(data["overview"])

#Translation of output, the dataset has 4803 different movies, described in 20978 words
#This matrix is to be used to compute the similarity score. (Euclidean, the Pearson and the cosine similarity scores)
print(TF_IDF_matrix.shape)

#calculating cosine similarity matrix
COS_SIM = linear_kernel(TF_IDF_matrix, TF_IDF_matrix)

#For the function of returning similar movies based on input I need to be able to connect input to movie index
#For that I will Construct a "reverse map".  (Removing duplicates) 
indices = pd.Series(data.index, index=data['title_x']).drop_duplicates()

#The function for recieving title input and returning recommendations
recommendations=[]

def recommender(title, COS_SIM=COS_SIM):
    
    #index = process.extractOne(indices[title])[0]   Figure this out with FuzzyWuzzy
    
    index = indices[title] #Getting index of the movie that matches title
    SIM_scores = list(enumerate(COS_SIM[index]))  #Finding the similarity scores of all movies with input movie
    SIM_scores = sorted(SIM_scores, key=lambda x: x[1], reverse=True) #Sort based on similarity score...
    SIM_scores = SIM_scores[1:6] #getting the 5 most similar, (disregarding the input)
    
    movie_indices = [i[0] for i in SIM_scores]
    
    recommendations.append(data["title_y"].iloc[movie_indices])
    
    return recommendations

recommender("The Godfather") 
print(recommendations)   