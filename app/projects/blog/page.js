"use client"

import blog from './blog.txt';

import { useState } from 'react';
import { updateBlog } from '../../actions/update-blog';

let blogText = blog;

export default function Home() {

  const [editable, setEditable] = useState(0);
  const [textContent, setTextContent] = useState(blogText);

  const saveToPage = () => {
    blogText = textContent;
    updateBlog(textContent);
    setEditable(0);
  }

  const editableButton = "absolute bottom-4 right-8 text-primary-900 hover:underline hover:text-secondary-600 duration-300";

  return(
  <div className="mt-24 flex flex-col justify-center w-full mx-auto py-10">
    <div className="relative sm:rounded-lg shadow-xl text-primary-900 border border-secondary-600 w-full sm:w-[50%] sm:mx-[25%] py-4 space-y-2">
      <h1 className="text-2xl text-center font-bold">
        My Blog
      </h1>
      <div className="flex flex-col space=y-4 mx-8 text-justify">
        {(editable==0) && <>{formatBlogData(blogText)}</>}
        {(editable== 1) && <textarea id="savableText" value={textContent} onChange={e => setTextContent(e.target.value)} className="border border-primary-500"/>}
      </div>
      <div className="mt-4 w-full h-8 bg-primary-50">
        {(editable == 0) && <button onClick={() => setEditable(1)} className={editableButton}>Edit</button>}
        {(editable == 1) && <button onClick={() => saveToPage()} className={editableButton}>Save</button>}
      </div>
    </div>
  </div>
  )
}

function formatBlogData(data) {
  const lineBreaks = data.split('\n');
  let output = [];
  for (let index = 0; index < lineBreaks.length; index++) {
    output.push(<p key={index}>{lineBreaks[index]}</p>);
  }
  return output;
}