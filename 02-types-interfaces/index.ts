import React from "react";

/*
Quando usar types?
- Criação de tipos utilitários
- Restringir os tipos apenas a definição
*/
type Tipo = Partial<{
  name: string;
  date: Date;
}>;

// declaration merge
interface Interface {
  name?: string;
  date?: Date;
}

// declaration merge
interface Interface {
  newProperty?: string;
}

interface FormData {
  NAO_EXISTE: string;
}

const form = new FormData();
// console vai dar erro pois não existe NAO_EXISTE em FormData
console.log("testing formData", form.NAO_EXISTE.toUpperCase());

const a: Tipo = {};
const b: Interface = {};

/*
Quando usar interface?
- Implementar comportamentos de classes
- Quando estiver criando uma biblioteca e quer suportar extensões
*/
interface Auth {
  auth: () => void;
}

class Person implements Auth {
  public auth() {}
}

// type union
type SearchSelectProps = React.ComponentProps<"select"> & {};

// type union utilizando interface
interface SelectProps extends React.ComponentProps<"select"> {}

/*
  ____ _____ _   _ _____ ____  ___ ____ ____
 / ___| ____| \ | | ____|  _ \|_ _/ ___/ ___|
| |  _|  _| |  \| |  _| | |_) || | |   \___ \
| |_| | |___| |\  | |___|  _ < | | |___ ___) |
 \____|_____|_| \_|_____|_| \_\___\____|____/
*/

type Custom<NAME> = {};
function Custom<NAME extends string>(name: NAME): Uppercase<NAME> {
  return name.toUpperCase() as unknown as Uppercase<NAME>;
}

const l = "testing";

const testCustom = Custom(l);

type PartialTest = Partial<{
  a: number;
  role: { name: string; expiredAt: Date };
}>;

const partialTest: PartialTest = {
  role: {
    name: "",
    expiredAt: new Date(),
  },
};

type OwnPartial<OBJECT> = {
  [KEY in keyof OBJECT]?: OwnPartial<OBJECT[KEY]>;
};

type PartialTest2 = OwnPartial<{
  a: number;
  role: { name: string; expiredAt: Date };
}>;

const partialTest2: PartialTest2 = {};

partialTest2.role?.name?.charCodeAt(1)

// Resolução do type-challenge Awaited<T>
// https://www.typescriptlang.org/play/?ssl=26&ssc=1&pln=26&pc=29#code/PQKgUABBCMAcCcEC0ECCB3AhgSwC4FMATSZJM8kgIwE8IBZTAY23wCsIBlbAawHsAnTBAAUAAQC2TFqwDOPAZgCUEAMT5MM2ioAO-XuOwz8qygFdsAG1xJsAOzAkVTiAEVT+Gbmy97JAJIAZhDoxgAWmABuxkK41NrG6KHYjKEQhhBC6ILa8YQQsfEQFjzGAAp6BkYANBChvOjBxoyYthAA5vi4+aHGBQlJKWkyabZyhL09wdm5+XH4APwOUABiAhD4AB6Y4toW+ABcaUEhtZHGAAbl+ob4ADwAols7ewAqcwB857X1+bztnRBHttdvg3vFFiRzlDcDISH1AU8QWDjABeCBXSp3Tz8Oxtd5LWaFABKHlMVggaLo1AwOAIhAeiNeHwgwGAEGxuMhUIJ7wgLySwwAju5PN5WultAI6RAAhVusYANoCbBtOyYCwZfheRh7AC6wlCuFw2hk+1Z4wiADpcLxgJJGHI+IJgJhCBEWowiEg+jJGDjtNZNvh+MwjDIkMKPF4fEhoEgACwAVm48eUNAgCokUjYjoU+sNxtNrNVuFCpkolsY+jt2dk8kEih5EAAaiwGj4IABxPAACXLhwLJrNwBhKUtsktAjawDg8DAIGADlAEAA+mv1xv1xAAJq8Uz8CAAYV44wgPeDxk3V7XEAXDiroy6BE8FIymlsjBEyhRvI01A-X4UryABEwFgPCqCvhiNwADIlLcHK2HiDjwlSNJ4EQtwvLyaIvOsGwELYhDDNBRhwdwdx2AEwboryixQGhWAYfSpT4lAhwvEuICrtem58lGR4aB4PG8Vud7YDsUqEsYADegLCuqNSPPEjBdAAvjKcoAOSiH0SApOqexIR4wCmF4FgyFpKFzBAAAaUEVDcCG4DiSH4vC24OdcRi3HJAQsBYhCHLYpjiJQNFqe5NkAFpeZitykViLm4hAAA+EAhWFwbvFFhTRdAcVOYlCWOT5iFtGlECULwvB7C0OW5cYeFonJpb4LYhzCD4ARkv5Fh7EFIiYPwbTBaF4X8N+v62NQU0ZDNEBqdZhTNGGr4KiQyn4KpDwKRYtyMbSmG2e8NTlTlVSbRsKm4Ltpjqgd1JMXStzbqdEB+QFg2ZRNi0XVdN13Q9h3Mbc0XveVlU-dlp0A9tt33Htj3oS9+UQ8lSGVdVtXqLY-1QFtO2I-d+0gy92E1ND-D-bqXEiaJK4QMs+5tQeHAECa9Oibei6gCQvIcOE-DGNQe4HjItVmWKpq1EaQ6sqOoTjjIk4jTOCAuqMIT8PzLZtuykvRqMA5y0WI6+krE5Tur8DABLFhSz4sJQLydACMYh7hP17UdDLg5m4ryuq2086LkAA
// 

// Resolução do type-challenge Parameters<T>
// https://www.typescriptlang.org/play/?#code/PQKgUABBDM0IwCYIFoIAUCGAnDBbApgC75YDOkKyV1FARgJ4S4CWAJgPZbMBe+LEACgACLDl14sAlBADE+DKUYzmAOwBmJWYQCuABwA2+WbW3N9hZKrAUZtiAEVt+UoWbsV1qAElcBvvhVCCEIACyMTMwtVdGw8IhJSAB4AFQA+CABzAJJmAGMIAHdmUPZtIO1SVQyIYoA6TwgAMU4IfAAPPD8ALgaAA37Ccihc9xcINXZ2CABeQWwMuC6IFy4VDIAaCHmEJZVtXFoSSSWAN3Y2GfSAbwBfBsJ6XSNG7RVc13dMHFxSZMejWYAWXoXzixDIiQeT3YanGk3SwGAEAA2vNFstCKsNlssBkdhA9gcSABdCj9XoNdIANWY+AKEHcEAA4sUABLaWhLEKEQi6UhdRGDXIhWoAK1ItU4GWAsEQYBAwGsoAgAH01eqNeqIABNUpYCAAYXYrCMrJIRk1lrVEAVSqRXnU5q2rUCOFYGAg7vGrwA5wBj9hgKFGYGggjgpLJVptYgqVikQS1JPzflbFT0ZHE6TTdIYdPpaYUKPtWPxxPJ3Gp1QafUAJWzufTFAA-BBaxQlq8ANYqdgFDxgREQB01owe0gYAC3Xq9al9AaD-wgwNrRG0WBUfyeKWjpYTAiTtRTSzzGazlzT9ALRd3ATLB4rGVTp8zDZqjrrLbbHYg3d7-aVEBVStTUIGSZwggNBRnGAkCtVtZhfE4IJgwgK4IAAUQAR20DB9E2DC2ied4IBucYsHYXAIAAciEYNkGFPDDDWZxgDKMxSGo6w5zeD4VDhdgBBWKolmEtZNkJQ4sF2fYpOOCAABEMGITM0IgCgsDXDcIAAIh0sA7h4943H42hsAENElloSZDDzTZtiWdCMCWaiAEFqNI+SzgudDDNeYzGTM7gBC885WDUu5FyeNtnG0cwZmXehVx0Dct3wSF-hhATUmsVDcmghNZmRChCOIwhEmw3D9ESUNYnDBIMuhWEJnYVJNmRMTsUkklUjakqiPwd4KpwvCapBOr4ghYMsrMrA2pRaz2FslRNiclz3NI4levWfqyuGqqxrDSakmm2EgvmzNtrAUlByAuCNSaddQk0ABlYg+Vg+6bUVUAKHSF6QmwIx6D1ZYlvY0YuR5PkBWAIURXFSVcRleAEGAPNSAKEg-ogGk6TB-QIZUVNuV5flBVIYUxQlKUUcQYBSHBvihggdJAU4IwDUB-RmKyEnofJuHKYRmncXlRUgA