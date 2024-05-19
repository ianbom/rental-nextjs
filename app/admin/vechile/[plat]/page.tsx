import React from 'react'

const page = ({ params }: { params: { plat: string } }) => {
    return (
        <div>{params.plat}</div>
    )
}

export default page