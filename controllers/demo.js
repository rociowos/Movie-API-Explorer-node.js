const axios = require ('axios');
const { request, responese} = require ('express');
const url = ' https://api.themoviedb.org/3'


const getEstrenos = (req = request, res = response) =>{
    const api = process.env.API_KEY;
    
    axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${api}`)
        .then(( {status, data, statusText}) => {
            // handle success
            console.log({status, data, statusText});
            const{results,page} = data;
            if (results.length === 0){
                res.status(404).json({msg : 'Pagina no encontrada'});
            }else{
            res.status(200).json({
                status,
                results,
                page,
                statusText,
            });
            }
        })
            
        .catch( (error) => {
            // handle error
            console.log(error);
            res.status(401).json({msg: 'error insesperado'}) 
        });
}

const getAnio = (req = request, res = response) => {
    const api = process.env.API_KEY;
    const {id} = req.params;
    console.log(id);
        
        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${api}&primary_release_year=${id}`)
        
        .then(( {status, data, statusText}) => {
            // handle success
            console.log({status, data, statusText});
            const{results,page} = data;
            if (results.length === 0){
                res.status(404).json({msg : 'Pagina no encontrada'});
            }else{
            res.status(200).json({
                status,
                results,
                statusText,
            });
            }
        })
            
        .catch( (error) => {
            // handle error
            console.log(error);
            res.status(401).json({msg: 'error insesperado'}) 
        });

}

const getTendencias = (req = request, res = response) => {
    const api = process.env.API_KEY;
        
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${api}`)
        
        .then(( {status, data, statusText}) => {
            // handle success
            console.log({status, data, statusText});
            const{results,page} = data;
            if (results.length === 0){
                res.status(404).json({msg : 'Pagina no encontrada'});
            }else{
            res.status(200).json({
                status,
                page,
                results,
                statusText,
            });
            }
        })
            
        .catch( (error) => {
            // handle error
            console.log(error);
            res.status(401).json({msg: 'error insesperado'}) 
        });

}

const getGeneros = (req = request, res = response) => {
    const api = process.env.API_KEY;
        
    axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${api}`)
        .then(({ status, data, statusText }) => {
            // handle success
            console.log({ status, data, statusText });
            const { genres } = data;
            if (!genres || genres.length === 0) {
                res.status(404).json({ msg: 'Pagina no encontrada' });
            } else {
                res.status(200).json({
                    status,
                    genres,
                    statusText,
                });
            }
        })
        .catch((error) => {
            // handle error
            console.log(error);
            res.status(500).json({ msg: 'Error inesperado' });
        });
}



module.exports = {
    getEstrenos, 
    getAnio, 
    getTendencias, 
    getGeneros,
    
}