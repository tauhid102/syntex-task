import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import '../../Style/Style.css';
const AddContent = () => {
    const [confirm, setConfirm] = useState(false);
    const { register, formState: { errors }, handleSubmit } = useForm();
    
    const imgeStorageKey='5ecdeb34a2245e0020768cd4e80a6dfb'

    const onSubmit = async data => {
        const image=data.image[0];
        const formData=new FormData();
        formData.append('image',image)
        const url=`https://api.imgbb.com/1/upload?expiration=600&key=${imgeStorageKey}`;
        fetch(url,{
            method:'POST',
            body:formData
        })
        .then(res=>res.json())
        .then(result=>{
            if(result.success){
                const img=result.data.url;
                const content={
                    lable:data.lable,
                    paragraph:data.pragraph,
                    img:img
                }
                fetch('http://localhost:5000/content',{
                    method:'POST',
                    headers:{
                        'content-type':'application/json',
                    },
                    body:JSON.stringify(content)
                })
                .then(res=>res.json())
                .then(data=>{
                    if(data.insertedId){
                        setConfirm(true);
                    }
                })
            }
        })
    };
    return (
        <div className='container mt-2'>
            <div className='row row-cols-1 row-cols-md-2 '>
                <div className="col">
                    <div className='w-100 m-auto mt-5 loginFrom'>
                        <h3 className=' text-center'>Add Content</h3>
                        <div>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="">
                                    <label for="exampleFormControlInput1" className="form-label">Lable</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="exampleFormControlInput1"
                                        placeholder="Lable"
                                        {...register("lable", {
                                            required: {
                                                value: true,
                                                message: 'Lable is Required'
                                            }
                                        })}
                                    />
                                    <label for="exampleFormControlInput1" className="form-label">
                                        {errors.name?.type === 'required' && <p role="alert" className='text-danger'>{errors.name.message}</p>}
                                    </label>
                                </div>
                                <div className="">
                                    <label for="exampleFormControlInput1" className="form-label">pragraph</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="exampleFormControlInput1"
                                        placeholder="Paragraph"
                                        {...register("pragraph", {
                                            required: {
                                                value: true,
                                                message: 'Paragraph is Required'
                                            }
                                        })}
                                    />
                                    <label for="exampleFormControlInput1" className="form-label">
                                        {errors.email?.type === 'required' && <p role="alert" className='text-danger'>{errors.email.message}</p>}
                                        {errors.email?.type === 'pattern' && <p role="alert" className='text-danger'>{errors.email.message}</p>}
                                    </label>
                                </div>
                                <div className="">
                                    <label for="exampleFormControlInput1" className="form-label">Photo</label>
                                    <input
                                        type="file"
                                        className="form-control"
                                        id="exampleFormControlInput1"
                                        {...register("image", {
                                            required: {
                                                value: true,
                                                message: 'Image is Required'
                                            }
                                        })}
                                    />
                                    <label for="exampleFormControlInput1" className="form-label">
                                        {errors.name?.type === 'required' && <p role="alert" className='text-danger'>{errors.name.message}</p>}
                                    </label>
                                </div>
                                <div className='d-grid '>
                                    <input className='btn btn-info' type="submit" value="Add Content" />
                                </div>
                            </form>
                            {confirm&& <p className='text-success'>Content Addes Succesfully</p>}
                            </div>
                    </div>
                </div>
                <div className="col">

                </div>

            </div>

        </div>
    );
};

export default AddContent;