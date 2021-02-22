import { sign as signJWT, verify as verifyJWT } from 'jsonwebtoken';

import { keys } from '../config';
import { TokenPayload } from 'src/core/types/interface/token.payload';

export const options = {
  issuer: 'unbird.com',
  audience: 'unbird.com',
};

export const sign = (payload: TokenPayload): string => {
  const setting = {
    issuer: 'unbird.com',
    audience: 'unbird.com',
    ...payload,
  };

  return signJWT(setting, keys.authSecret, { expiresIn: '5h' });
};

export const decode = (token?: string): TokenPayload => {
  try {
    if (token) {
      return verifyJWT(token, keys.authSecret) as TokenPayload;
    }
    return null;
  } catch (err) {
    return null;
  }
};

export const signRestToken = (payload: TokenPayload): string => {
  const setting = {
    issuer: 'unbird.com',
    audience: 'unbird.com',
    ...payload,
  };

  return signJWT(setting, keys.resetSecret, { expiresIn: 60 * 2 });
};

export const decodeRestToken = (token?: string): TokenPayload => {
  try {
    if (token) {
      return verifyJWT(token, keys.resetSecret) as TokenPayload;
    }
    return null;
  } catch (err) {
    return null;
  }
};
