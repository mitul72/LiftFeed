/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/09WfxN76kFG
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'
import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { CardHeader, CardContent, Card } from "@/components/ui/card";
import { useUserAuth } from "@/context/auth-context";

export function ProfileArea() {
  const { user } = useUserAuth();
  if (!user) return null;
  const userName = user.displayName?.split(" ")[0].toLowerCase();
  return (
    <div className="w-full max-w-5xl mx-auto py-12 md:py-20">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
        <div className="flex flex-col items-center">
          <Avatar className="w-24 h-24 md:w-32 md:h-32">
            <AvatarImage alt="@liftfeed" src="/placeholder-avatar.jpg" />
            <AvatarFallback>LF</AvatarFallback>
          </Avatar>
          <h1 className="text-2xl font-bold mt-4">{user.displayName}</h1>
          <p className="text-gray-500 dark:text-gray-400">@{userName}</p>
        </div>
        <div className="flex-1 space-y-6">
          <div>
            <h2 className="text-lg font-semibold">About</h2>
            <p className="text-gray-500 dark:text-gray-400 mt-2">
              I&#39;m a fitness enthusiast who loves to share my journey and
              experiences in the gym. I&#39;m passionate about helping others
              achieve their fitness goals through my tips and advice.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold">Stats</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2">
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 text-center">
                <p className="text-2xl font-bold">250</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  Workouts
                </p>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 text-center">
                <p className="text-2xl font-bold">15</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  Diet Plans
                </p>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 text-center">
                <p className="text-2xl font-bold">1.2K</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  Followers
                </p>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 text-center">
                <p className="text-2xl font-bold">500</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  Following
                </p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-lg font-semibold">Recent Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
              <Card className="bg-gray-100 dark:bg-gray-800 p-4">
                <CardHeader>
                  <h3 className="text-lg font-semibold">
                    My Fitness Journey: From Couch to Gym
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    May 15, 2023
                  </p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400">
                    In this post, I share my personal story of how I went from
                    being a couch potato to a fitness enthusiast. I discuss the
                    challenges I faced and the strategies I used to stay
                    motivated and achieve my goals.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gray-100 dark:bg-gray-800 p-4">
                <CardHeader>
                  <h3 className="text-lg font-semibold">
                    5 Effective Exercises for Stronger Legs
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    April 30, 2023
                  </p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400">
                    In this post, I share 5 of my favorite exercises that have
                    helped me build stronger and more toned legs. These
                    exercises can be easily incorporated into your workout
                    routine.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
