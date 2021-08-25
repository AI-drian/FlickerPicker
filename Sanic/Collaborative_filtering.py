import pandas as pd
from scipy.sparse import csr_matrix
from sklearn.neighbors import NearestNeighbors
from fuzzywuzzy import process #For better string matching

#The choice to use ColFil on this dataset is not optimal due to many empty values...

#From movies I will only use the columns "movieID" and "title". Had to specify their datatypes
#From ratings I need "userId" and "movieId" to know who's rating belong to which film. (rating is not an integer-hence the float32)
dataset_movies = pd.read_csv("./data/movies.csv", usecols=["movieId", "title"], dtype={"movieId": "int32", "title":"string"})
dataset_ratings = pd.read_csv("./data/ratings.csv", usecols=["userId", "movieId", "rating"], dtype={"userId": "int32", "movieId": "int32", "rating":"float32"})

#Using the Pandas function to pivot() transform the data so I get users on the x-axis and movies on y-axis, values inside the table is ratings
#To deal with empty values I use fillna() function to fill out all empty cells with 0.
movies_and_users = dataset_ratings.pivot(index = "movieId", columns="userId", values="rating").fillna(0) 
matrix_movies_users = csr_matrix(movies_and_users)

#Using the K-nearest neighbour algorithm to classify movies based on cheat-sheet from sklearn. 
#I used Euclidian distance to count the distance between vectors.
#Brute Force algorithm to decide nearest neighbor =taking one datapoint and comparing it to ALL other datapoints, sorting out the 10 nearest
knn_model = NearestNeighbors(n_neighbors=10, algorithm="brute", metric='euclidean')

#Empty list to to store recommended movies
recommendations = []

#Function that return recommended movies, will be useful in the app
def collaborative_filter(movie_title):
    knn_model.fit(matrix_movies_users)
    index = process.extractOne(movie_title, dataset_movies["title"])[2]  #Fuzzywuzzy
    print("Movie Selected: ", dataset_movies["title"][index], "Index: ", index)
    print("Searching for recommendations...")
    distances, indexes = knn_model.kneighbors(matrix_movies_users[index], n_neighbors = 5)
    
    for i in indexes: 
        recommendations.append((dataset_movies["title"][i].where(i!=index))) #Title instead of ID and avoid comparing the movie to itself (gets a perfect score though :D )
    return recommendations

# Test
# collaborative_filter("Matrix")
# print("Collaborative filter: \n", recommendations)