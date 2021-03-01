import axios from 'axios'
import { formatDate } from '../helper/common'

export const callSearchTermAPI = async (movie, page=1) => {
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${movie}&api_key=cfe422613b250f702980a3bbf9e90716&page=${page}`)
        return response.status === 200 ? response.data : null;
    } catch (error) {
        console.error("Error in calling callSearchTermAPI", error)
    }
}


export const callPopularMovieAPI = async (page=1) => {
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=0aecc06bb4fadb06b5f071fef0c2ce6d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`)
        return response.status === 200 ? response.data : null;
    } catch (error) {
        console.log("Error in calling callSearchTermAPI", error)
    }
}

export const callMovieDetailByIdAPI = async (id) => {
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=0aecc06bb4fadb06b5f071fef0c2ce6d&&language=en-US&append_to_response=videos%2Cimages&include_image_language=en%2Cnull`)
        return response.status === 200 ? response.data : null;
    } catch (error) {
        console.log('error in callMovieDetailByIdAPI', error)
    }
}

export const callUpcomingMovieAPI = async (endDate, page=1) => {
    try {
        var today = new Date();
        const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=0aecc06bb4fadb06b5f071fef0c2ce6d&language=en-US&region=US&sort_by=release_date.asc&include_adult=false&include_video=false&page=${page}&release_date.gte=${formatDate(today)}&release_date.lte=${endDate}&with_release_type=3%7C2`)
        return response.status === 200 ? response.data : null;
    } catch (error) {
        console.log('error in callMovieDetailByIdAPI', error)
    }
}

export const callRequestCommentAPI = async (count=3) => {
    try {
        const response = await axios.get(`https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat&noinfo`)
        return response.status === 200 ? response.data : null;
    } catch (error) {
        console.log("Error in calling callCommentAPI", error)
    }
}

export const callSubmitCommentAPI = async (content="", userID=0) => {
    console.log("submitting comment....")
    return true
}