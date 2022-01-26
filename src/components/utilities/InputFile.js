import React, {useState} from 'react';

export default function InputFile(props) {
    const [files, setFiles] = useState(0);

    return (
        <label className="input-file">
            {
                (props.multiple) ?
                <input type="file" multiple onChange={(e) => setFiles(e.target.files.length)}/>
                : <input type="file" onChange={(e) => setFiles(e.target.files.length)}/>
            }
            <img src="/real_estate/img/icons/el_paper-clip.svg" alt="прикрепить файл"/>
            <span className="ind">{ (files>0) && files }</span>
        </label>
    )
}
