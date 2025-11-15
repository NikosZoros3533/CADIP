import { entities, vocabs } from "@/lib/constants";


const BASE_URL = "http://localhost:8000/api";

const ancientMonumentUrl = entities[0].fetchUrl;
const accessibilityVocabUrl = vocabs[0].fetchUrl;

export async function getMonuments() {
  try {
    const res = await fetch(`${BASE_URL}/${ancientMonumentUrl}`);
    if (!res.ok) {
      throw new Error(`Response status: ${res.status}`);
    }

    const data = await res.json();
    const ancientMonuments = data?.member;
    return ancientMonuments;
  } catch (error) {
    throw error;
  }
}

export async function getMonument(id) {
  try {
    const res = await fetch(`${BASE_URL}/${ancientMonumentUrl}/${id}`);
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

export async function postMonument(body) {
  try {
    const res = await fetch(`${BASE_URL}/${ancientMonumentUrl}`, {
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

export async function patchMonument(id, body) {
  try {
    const res = await fetch(`${BASE_URL}/${ancientMonumentUrl}/${id}`, {
      method: "PATCH",
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

export async function deleteMonument(id) {
  try {
    const res = await fetch(`${BASE_URL}/${ancientMonumentUrl}/${id}`, {
      method: "DELETE",
    });
    if (!res.ok) {
      throw new Error(`Response status: ${res.status}`);
    }

    console.log(`Monument with id ${id} deleted successfully.`);
  } catch (error) {
    throw error;
  }
}

export async function getAccessibilities() {
  try {
    const res = await fetch(`${BASE_URL}/${accessibilityVocabUrl}`);
    if (!res.ok) {
      throw new Error(`Response status: ${res.status}`);
    }
    const data = await res.json();
    const accessibilities = data?.member;
    return accessibilities;
  } catch (error) {
    throw error;
  }
}
