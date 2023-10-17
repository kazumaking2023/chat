import { useConnection } from "context/connect";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Rooms() {
    return <>
        <div className="p-12 flex justify-center h-screen text-center items-center text-white">
            <div>
                <p className="text-2xl">Nhấn <i><b>Chat với Người lạ</b></i> để bắt đầu!</p>
            </div>
        </div>
    </>
}