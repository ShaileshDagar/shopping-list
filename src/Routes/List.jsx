import { defer, useLoaderData } from 'react-router-dom'
import {requireAuth} from '../utils'
import { getUserList } from '../api'

export async function loader( {request} ) {
    await requireAuth(request)
    //fetch data from api
    return defer({items: getUserList()})
}

export default function List() {
    const itemsPromise = useLoaderData()
    
    //Suspense, await
    return <h1>Add item form & List goes here!</h1>
}