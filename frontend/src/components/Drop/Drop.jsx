import S from './styles';
import Dropzone from 'react-dropzone'

import File from 'assets/upload.svg'
import { useState, useCallback, useEffect } from 'react';

export default function Drop() {
  const [files, setFiles] = useState([]);
  const [mapFiles, setMapFiles] = useState([]);
  const [rejectedfiles, setRejectedFiles] = useState([]);


  useEffect(() => {
    console.log('Added file', files);
  }, [files])
  const onDrop = useCallback(
    (acceptedFiles, fileRejections) => {
      // If file is valid, add it to app files
      // If not flag it as rejected
      if (acceptedFiles?.length) {
        setFiles((previousFiles) => [...previousFiles, ...acceptedFiles]);

      }

      if (fileRejections?.length) {
        setRejectedFiles((previousFiles) => [
          ...previousFiles,
          ...fileRejections,
        ]);
      }
    },
    [],
  );

  return (
    <Dropzone onDrop={onDrop}>
      {({getRootProps, getInputProps}) => (
        <section>
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <S.FileWrapper>
              <S.File src={File}/>
              <p>Drag and drop a file, or click to select files</p>
            </S.FileWrapper>
          </div>
        </section>
      )}
    </Dropzone>
  )
}
