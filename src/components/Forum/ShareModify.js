import axios from "axios";
import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from "react-router";
import '../../styles/Forum/ShareModify.css';
import TextEditor from "../common/TextEditor";
import { useNavigate } from 'react-router-dom';


export default function ShareModify(){
    // const [reviewModify, setReviewModity]=useState([]);
    const [editorData,setEditorData]=useState('');
    const [titleVal, setTitleVal]=useState('');
    const navigate = useNavigate();
    const {id}=useParams();
    const editorRef=useRef();
    const [userId,setUserId]=useState(1);
    const [shareInfo, setShareInfo]=useState([]);

    useEffect(()=>{
        axios
        .post(`http://localhost:8080/shareInfo`,{id:id})
        .then(res=>{
            setShareInfo(res.data.shareInfo);
            console.log(res.data.shareInfo);
            setTitleVal(res.data.shareInfo.title);
            setEditorData(res.data.shareInfo.content);
            // console.log("setEditorData : "+editorData);
            // console.log("reviewInfo : "+reviewInfo.content);
            // console.log("result"+result);
        }).catch(err=>{
            console.log(err);
        })
    },[]);
    // const result=reviewInfo.content;
    // console.log("result : "+result);

    const handleupdateSave=async()=>{
        try {
            const requestData={
                content:editorData,
                title:titleVal
            };
            const res=await axios.post(`http://localhost:8080/shareModify/${id}`, requestData,
            {
                headers:{'Content-Type': 'application/json'},
                withCredentials:true
            })
            console.log(res.data);
            navigate('/shares');
        } catch (error) {
            console.log(error);
        }
       
           

    }

    const handleEditorData=(data)=>{
        setEditorData(data);
        console.log("editorData : "+editorData);
    }

    const handleTitleChange=(e)=>{
        setTitleVal(e.target.value);
        console.log(titleVal);
    }
    

    return( 
        <div className="reviewModify_mainLayout">
            <div className="reviewModify_wrap">
                <div className="reviewModify_top">
                    <div className="reviewModify_title">
                        <input className="titleInput" value={titleVal}  onChange={handleTitleChange} maxLength={50}/>
                    </div>
                </div>
                <div className="reviewModify_layout">
                    <div className="reviewModify_content">
                        <div className="reviewModify_content_in">
                            <TextEditor onEditorDataChange={handleEditorData} />
                        </div>
                    </div>
                </div>
                <div className="tempAndComplBtn_layout">
                    <div className="tempAndComplBtn_layout_in">
                        <div className="tmepBtn">
                                임시저장
                        </div>
                        <div className="complBtn" onClick={handleupdateSave}>
                                등록
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}