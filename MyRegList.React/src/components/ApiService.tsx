import { IItem } from "../types";
import axios from "axios"

const baseUrl ="http://localhost:5244/api/Item/";

interface IParams {
    baseUrl: string
headers : any
method: string
}

interface IResponse{
    status: number,
    data: any
}

class ApiService{

    static GetAll = async (): Promise<IItem[]> => {
        const data = await fetch("http://localhost:5244/api/Item/GetAll", {
        method: "GET",
      });
      const jsonData: IItem[] = await data.json();
        return jsonData;
    }

    static GetById = async (id:number) : Promise<IItem | null>=> {
        const item=await axios.get(baseUrl + `Get/${id}`).then((response) =>{
            if (!response.data)
                return null;
            return response.data;
        });
        return item;
    }

    static AddItem =async (item:IItem): Promise<IResponse> => {
        const config: IParams = {
            baseUrl: baseUrl,
            headers: {
                "accept": "*/*",
                "Content-Type": "application/json",
                    },
            method: 'post'
        }

       const response = await  axios({
            ...config,
            url: `${config.baseUrl}Create`,
            data:{
                 description:item.description,
                 imageUrl:item.imageUrl,
                 name:item.name,
                 type:item.type
            }
        })
            .then ( (response) => {
        console.log(response)
        return {
            status: response.status,
            data: response.data
        }
    }).catch((error) =>{
        console.log(error)
        return {
            status: error.status,
            data: error.response
        }
    })
    return response;
    }
    
    static UpdateItem =async (item:IItem): Promise<IResponse> => {
        const config: IParams = {
            baseUrl: baseUrl,
            headers: {
                "accept": "*/*",
                "Content-Type": "application/json",
            },
            method: 'put'
        }

        const response = await  axios({
            ...config,
            url: `${config.baseUrl}Update`,
            data: item
        })
            .then ( (response) => {
        console.log(response)
        return {
            status: response.status,
            data: response.data
        }
    }).catch((error) =>{
        console.log(error)
        return {
            status: error.status,
            data: error.response
        }
    })
    return response;
    }

    static DeleteItem =async (id:number): Promise<IResponse> => {
        const config: IParams = {
            baseUrl: baseUrl,
            headers: {
                "accept": "*/*",
            },
            method: 'delete'
        }

        const response = await  axios({
            ...config,
            url: `${config.baseUrl}Delete/${id}`,
        })
            .then ( (response) => {
        console.log(response)
        return {
            status: response.status,
            data: response.data
        }
    }).catch((error) =>{
        console.log(error)
        return {
            status: error.status,
            data: error.response
        }
    })
    return response;
    }
}
    
export default ApiService;