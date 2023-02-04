import { isArray, isObject, includes } from "lodash";
import queryString from "query-string";
import { toast } from "react-toastify";
import { useSWRConfig } from "swr";

export function capitalizeFirstLetter(text: string | any) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export function appEncrypt(data: string) {
  return data;
  // return Crypto.enc.Base64.stringify(Crypto.enc.Utf8.parse(data));
}

export function appDecrypt(data: string) {
  return data;
  // return Crypto.enc.Base64.parse(data)?.toString(Crypto.enc.Utf8);
}

export function responseErrorHandler(res: any, setError?: any) {
  if (res && res?.data && res?.data?.errors) {
    // set error in field
    if (setError) {
      Object.keys(res.data.errors).map((key) =>
        setError(key, { message: res.data.errors[key][0] })
      );
    }

    // fire alert
    const firstErrorKey = Object.keys(res.data.errors)[0];
    throw toast.error(res.data.errors[firstErrorKey][0]);
  }

  if (res && res?.data && res?.data?.message) {
    throw toast.error(res.data.message);
  }

  if (res && res?.message) {
    throw toast.error(res.message);
  }

  throw toast.error("Something went wrong. Please try again later!");
}

export function objectToFormData(
  obj: any,
  rootName?: any,
  ignoreList?: any
): FormData {
  const formData = new FormData();

  function appendFormData(data: any, root: any) {
    if (!ignore(root)) {
      root = root || "";
      if (data instanceof File) {
        formData.append(root, data);
      } else if (Array.isArray(data)) {
        for (let i = 0; i < data.length; i++) {
          appendFormData(data[i], root + "[" + i + "]");
        }
      } else if (typeof data === "object" && data) {
        for (const key in data) {
          if (data.hasOwnProperty(key)) {
            if (root === "") {
              appendFormData(data[key], key);
            } else {
              appendFormData(data[key], root + "[" + key + "]");
            }
          }
        }
      } else {
        if (data !== null && typeof data !== "undefined") {
          formData.append(root, data);
        }
      }
    }
  }

  function ignore(root: any) {
    return (
      Array.isArray(ignoreList) &&
      ignoreList.some(function (x) {
        return x === root;
      })
    );
  }

  appendFormData(obj, rootName);

  return formData;
}

export function isValidEmail(email: string) {
  const expression = new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i);

  return expression.test(email);
}

export function isValidPhone(email: string) {
  const expression = new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i);

  return expression.test(email);
}

export function isValidUrl(url: string) {
  const pattern = new RegExp(
    "^(https?:\\/\\/)" + // protocol
    "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
    "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
    "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
    "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
    "(\\#[-a-z\\d_]*)?$",
    "i"
  );

  return !!pattern.test(url);
}

export function isValidPassword(password: string) {
  const re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

  return re.test(password);
}

export function useMatchMutate() {
  const { cache, mutate } = useSWRConfig();
  // @ts-ignore
  return (matcher, ...args) => {
    if (!(cache instanceof Map)) {
      throw new Error(
        "matchMutate requires the cache provider to be a Map instance"
      );
    }

    const keys = [];
    // @ts-ignore
    for (const key of cache.keys()) {
      if (includes(key, matcher)) {
        keys.push(key);
      }
    }

    const mutations = keys.map((key) => mutate(key, ...args));
    return Promise.all(mutations);
  };
}

export function renderLocation({ city, state, country }: any) {
  if (city) {
    if (state) {
      return city + ", " + state; // city & state
      // if (country) {
      //   return city + ", " + state + ", " + country; // city & state & country
      // } else {
      //   return city + ", " + state; // city & state
      // }
    } else {
      if (country) {
        return city + ", " + country; // city & country
      } else {
        return city; // city
      }
    }
  } else {
    if (state) {
      if (country) {
        return state + ", " + country; // state & country
      } else {
        return state; // state
      }
    } else {
      if (country) {
        return country; // country
      } else {
        return "";
      }
    }
  }
}

// export const imageFullPath = (url: string) => process.env.NEXT_PUBLIC_BASE_URL + url;
// export const imageFullPath = (url: string) => "https://via.placeholder.com/1280x720.png/00dd99?text=ipsa"
export const imageFullPath = (url: string) => url;

export const avatarGenerator = (email: string) =>
  "https://robohash.org/" + (email || "random") + ".png";

export function cleanUrlParams(url: string, parameter: object): string {
  let params = {};
  for (let [key, value] of Object.entries(parameter)) {
    if (Array.isArray(value) && value.length) {
      Object.assign(params, { [key]: value.join(",") });
    }
    if (value && !isArray(value) && !isObject(value)) {
      Object.assign(params, { [key]: value });
    }
  }
  if (!Object.keys(params).length) {
    return url;
  }
  const parmsString = queryString.stringify(params);
  return `${url}?${parmsString}`;
}
