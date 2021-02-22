import * as aws from 'aws-sdk';
import { keys } from '../config';
import { UploadURL } from '../types/interface/upload';

type ACL = 'private' | 'public-read';

export const createSignedURL = async (
  name: string,
  type: string,
  alc: ACL = 'private',
): Promise<UploadURL> => {
  const options = {
    signatureVersion: 'v4',
    endpoint: `${keys.aws.s3.bucket}.s3-accelerate.amazonaws.com`,
    useAccelerateEndpoint: true,
  };

  const s3Instance = new aws.S3(options);

  const params = {
    Bucket: keys.aws.s3.bucket,
    ContentType: type,
    Key: name,
    Expires: 120,
    ACL: alc,
  };

  const url = await s3Instance.getSignedUrlPromise('putObject', params);

  return {
    postURL: url,
    getURL: url.split('?')[0],
  };
};
