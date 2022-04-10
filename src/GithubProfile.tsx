import React from "react";
import { useForm } from "react-hook-form";
import { atom, selector, useRecoilState, useRecoilValue } from "recoil";

const GITHUB_URL = "https://api.github.com";
// Generated by https://quicktype.io
interface GithubUser {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  name: string;
  company: string;
  blog: string;
  location: string;
  email: null;
  hireable: boolean;
  bio: null;
  twitter_username: null;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
}

async function getGithubUser(username: string): Promise<GithubUser> {
  // https://api.github.com/users/{USERNAME}
  const response = await fetch(`${GITHUB_URL}/users/${username}`, {
    method: "GET",
  });
  if (response.ok) {
    return response.json();
  } else {
    const result = await response.json();
    const error = new Error(result.message || response.statusText);
    throw error;
  }
}

const usernameAtom = atom({
  key: "username",
  default: "jellydn",
});
const profileSelector = selector({
  key: "profile",
  get: async (opts) => {
    const username = opts.get(usernameAtom);
    return getGithubUser(username);
  },
});

function Profile({
  avatar,
  name,
  companies,
  url,
}: {
  avatar: string;
  name: string;
  companies: string[];
  url: string;
}) {
  return (
    <div className="items-center justify-center w-full pb-6 mx-auto my-12 overflow-hidden text-gray-700 bg-white rounded-lg shadow-sm md:max-w-sm">
      <div className="relative h-40">
        <img
          className="absolute object-cover w-full h-full"
          src={avatar}
          alt="avatar"
        />
      </div>
      <div className="mt-16">
        <a href={url} className="hover:text-blue-400">
          <h1 className="text-lg font-semibold text-center">{name}</h1>
        </a>
      </div>
      <div className="flex flex-wrap pt-3 mx-6 mt-6 border-t">
        {companies.map((company) => (
          <div
            key={company}
            className="px-2 my-1 mr-2 text-xs tracking-wider text-indigo-600 uppercase border border-indigo-600 cursor-default hover:bg-indigo-600 hover:text-indigo-100"
          >
            {company}
          </div>
        ))}
      </div>
    </div>
  );
}

type FormValues = {
  username: string;
};

export function GithubProfile() {
  const [username, setUsername] = useRecoilState(usernameAtom);
  const profile = useRecoilValue(profileSelector);
  const { register, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      username,
    },
  });

  const onSubmit = (data: FormValues) => setUsername(data.username);

  return (
    <div>
      <div className="flex flex-col max-w-4xl my-10 overflow-hidden bg-white rounded-lg shadow-lg md:h-56 md:flex-row">
        <div className="items-center justify-center md:flex md:w-1/2 md:bg-gray-700">
          <div className="px-8 py-6 md:py-0">
            <h2 className="text-2xl font-bold text-gray-700 md:text-gray-100">
              Github Profile Finder
            </h2>
            <p className="mt-2 text-gray-600 md:text-gray-400">
              Please enter your username and press enter
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center pb-6 border-gray-700 md:py-0 md:w-1/2 md:border-b-8">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col overflow-hidden rounded-lg sm:flex-row">
              <input
                className="px-4 py-3 text-gray-800 placeholder-gray-500 bg-gray-200 border-2 border-gray-300 outline-none focus:bg-gray-100"
                type="text"
                placeholder="Enter your username"
                {...register("username", {
                  required: true,
                  min: 3,
                })}
              />
              <button className="px-4 py-3 font-semibold text-gray-100 uppercase bg-gray-700 hover:bg-gray-600">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <Profile
        avatar={profile.avatar_url}
        name={profile.name}
        companies={profile.company?.split(" ") ?? []}
        url={profile.html_url}
      />
    </div>
  );
}
