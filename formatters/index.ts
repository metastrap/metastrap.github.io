import { ConfigFeatures, IGroup, TElement } from 'types/index';
import type { types } from '@metastrap/core';

export function convert(data: TElement): Record<string, unknown> {
  if (data.type === 'group') {
    return data.elements.reduce((acc, element) => {
      let modifiedAcc;
      if (element.type === 'group') {
        modifiedAcc = {
          ...acc,
          ...convert(element),
        };
      } else {
        modifiedAcc = {
          ...acc,
        };
        if (element.active) {
          modifiedAcc[`with${element.id}`] = element.value;
        }
      }
      return modifiedAcc;
    }, {} as Record<string, unknown>);
  }
  return data.active ? {
    [`with${data.id}`]: true,
  } : {};
}

export default function format(data: IGroup): ConfigFeatures {
  const features = convert(data) as unknown as ConfigFeatures;
  delete features.withprojectName;
  return features;
}
