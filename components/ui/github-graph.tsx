"use client";

import { useTheme } from "next-themes";
import dynamic from "next/dynamic";
import { cloneElement } from "react";
import {
  Tooltip,
  TooltipCreateHandle,
  TooltipPopup,
  TooltipProvider,
  TooltipTrigger,
} from "./tooltip";

const githubTooltipHandle = TooltipCreateHandle<{ count: number; date: string }>();

const GitHubCalendar = dynamic(
  () =>
    import("react-github-calendar").then((mod) => ({
      default: mod.GitHubCalendar,
    })),
  { ssr: false }
);

const GitHubGraph = () => {
  const { resolvedTheme } = useTheme();
  const currentTheme = resolvedTheme === "light" ? "light" : "dark";

  const customTheme = {
    dark: [
      "#0F1A1780",
      "#2A3F3A",
      "#45665E",
      "#6F9188",
      "#A7C8BD",
    ],
    light: [
      "#E9F4F0",
      "#BFD6CD",
      "#8FB4A8",
      "#52786E",
      "#195446",
    ],
  };

  return (
    <TooltipProvider>
      <div className="w-full z-20 border border-dashed rounded-lg bg-site-background p-2">
        <GitHubCalendar
          username="anasfarock"
          theme={customTheme}
          colorScheme={currentTheme}
          labels={{ totalCount: "{{count}} contributions in the past year" }}
          blockSize={12}
          blockMargin={3}
          fontSize={11}
          // Override the library's inline maxWidth so the article fills the container
          style={{ width: "100%", maxWidth: "100%" }}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          renderBlock={(block: any, activity: any) => (
            <TooltipTrigger
              handle={githubTooltipHandle}
              payload={{ count: activity.count, date: activity.date }}
              render={(triggerProps) =>
                cloneElement(block, triggerProps as Record<string, unknown>)
              }
            />
          )}
        />

        <Tooltip handle={githubTooltipHandle}>
          {({ payload }) => (
            <TooltipPopup>
              {payload != null &&
                `${payload.count} contributions on ${payload.date}`}
            </TooltipPopup>
          )}
        </Tooltip>
      </div>
    </TooltipProvider>
  );
};

export default GitHubGraph;
