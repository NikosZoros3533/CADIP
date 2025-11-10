/* 
getEntities(fetchUrl:string entity.fetchUrl)
getEntity(fetchUrl/{id})
getVocab(fetchUrl:vocabs.vocab.fetchurl)
*/
const BASE_URL = "http://localhost:8000/api/";

export async function getEntities(url) {
  try {
    const res = await fetch(`${BASE_URL}${url}`);
    if (!res.ok) {
      throw new Error(`Response status: ${res.status}`);
    }

    const data = await res.json();
    const entities = data?.member;
    return entities;
  } catch (error) {
    throw error;
  }
}

export async function getEntity(url) {
  try {
    const res = await fetch(`${BASE_URL}${url}`);
    if (!res.ok) {
      throw new Error(`Response status: ${res.status}`);
    }
    const data = await res.json();
    console.log(data);

    return data;
  } catch (error) {
    throw error;
  }
}

export async function postEntity(url, body) {
  try {
    const res = await fetch(`${BASE_URL}${url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/ld+json",
      },
      body: JSON.stringify(body),
    });
    if (!res.ok) {
      throw new Error(`Response status: ${res.status}`);
    }
    const data = await res.json();
    console.log(data);
  } catch (error) {
    throw error;
  }
}

// export async function getVocab() {
//   try {
//   } catch (error) {}
// }
