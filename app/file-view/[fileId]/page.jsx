"use client"

import React, { useEffect, useState } from 'react';
import FileItem from './_components/FileItem'
import app from '../../../firebaseConfig';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import Link from 'next/link';
import Image from 'next/image';



const FileView = ({ params }) => {
    const [file, setFile] = useState();

    useEffect(() => {
        console.log(params.fileId);
        params.fileId && getFileInfo();
    }, []);



    const db = getFirestore(app);
    const getFileInfo = async () => {
        const docRef = doc(db, "fileUpload", params?.fileId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            setFile(docSnap.data());
        } else {
            // docSnap.data() will be undefined in this case
            console.log("No such document!");
        }
    };



    return (
        <div className='w-full h-screen flex flex-col gap-4 justify-center items-center bg-black'>
            <Link href={'/'}>
                <Image src={'/FG.png'} width={150} height={150} alt=''/>
            </Link>
            <FileItem file={file}/>
        </div>
    )
}

export default FileView;