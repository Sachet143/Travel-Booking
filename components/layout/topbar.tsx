import useUser from '@/services/hooks/useUser';
import { useRouter } from 'next/router'
import React from 'react'

function Topbar() {
    const router = useRouter();
    const { user } = useUser();
    /**
     * Need to check between user or non user and return topbar respectively
     */
    return (
        <div>Topbar</div>
    )
}

export default Topbar