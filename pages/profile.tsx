import { useRouter } from 'next/router';
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { customApi, useFetch } from '../src/hooks/useFetch';
import { useGlobalData } from '../contexts/GlobalDataContext'
import { AxiosResponse } from 'axios';
import ProfileDetails from '../src/components/profile'

export default function StrategyDetailsPage() {
    const { loginData } = useGlobalData();

    return (
        <div>
            <ProfileDetails />
        </div>
    )
}
