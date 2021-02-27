import { useEffect } from 'react';
import Mousetrap from 'mousetrap/mousetrap';
import 'mousetrap-global-bind';

export const useBindKeys = (
  keys: string[],
  handler: (event: KeyboardEvent) => void
): void => {
  useEffect(() => {
    Mousetrap.bind(keys, handler);

    return () => Mousetrap.unbind(keys);
  }, [handler, keys]);
};

export const useBindGlobalKeys = (
  keys: string[],
  handler: (event: KeyboardEvent) => void
): void => {
  useEffect(() => {
    Mousetrap.bindGlobal(keys, handler);

    return () => {
      Mousetrap.unbind(keys);
    };
  }, [handler, keys]);
};

interface BindObject {
  trigger: boolean;
  zIndex: number;
  handler: (e: Event) => void;
}

interface BindObjectMap {
  [ref: string]: BindObject;
}

const keyedSharedHandlers = {};

const getOrCreateKeyDictionary = (key: string): BindObjectMap => {
  if (!keyedSharedHandlers[key]) keyedSharedHandlers[key] = {};
  return keyedSharedHandlers[key];
};

const getCandidateHandler = (
  sharedBindings: BindObjectMap
): BindObject | null => {
  const values = Object.values(sharedBindings);
  if (values.length === 0) return null;
  const triggered = values.filter((obj) => obj.trigger === true);
  if (triggered.length > 0) {
    const topTriggered = triggered.reduce((prev, current) => {
      return prev.zIndex > current.zIndex ? prev : current;
    });
    return topTriggered;
  }
  const topZIndex = values
    .filter((obj) => obj.zIndex > 0)
    .reduce((prev, current) => (prev.zIndex > current.zIndex ? prev : current));

  return topZIndex;
};

export const triggerKeys = (keys: string | string[]) => {
  Mousetrap.trigger(keys);
};

export const useSharedBindKey = (
  key: string,
  handler: (event: KeyboardEvent) => void,
  zIndex: number,
  trigger: boolean,
  ref: string
): void => {
  const sharedHandlers = getOrCreateKeyDictionary(key);
  useEffect(() => {
    sharedHandlers[ref] = { trigger, zIndex, handler };

    Mousetrap.bind(key, (e) => {
      const candidate = getCandidateHandler(sharedHandlers);
      if (candidate) candidate.handler(e);
    });

    return () => {
      delete sharedHandlers[ref];
    };
  }, [handler, key, ref, sharedHandlers, trigger, zIndex]);
};
