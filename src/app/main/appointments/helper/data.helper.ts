import { HttpHeaders } from "@angular/common/http";
import { DataDescriptor } from "../models/data-descriptor.model";

export const createDescriptorHeader: (
  descriptor: DataDescriptor
) => HttpHeaders = (descriptor) => {
  return new HttpHeaders().set("x-descriptor", JSON.stringify(descriptor));
};
