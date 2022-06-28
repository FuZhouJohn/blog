import fs from "fs";
import path from "path";
import matter from "gray-matter";
import dayjs from "dayjs";

export const data = {};
export default {
  watch: "./*.md",
  async load() {
    const files = readFiles(path.resolve(__dirname, "."));
    return files;
  },
};

const readFiles = (srcDir) => {
  const files = fs.readdirSync(srcDir);
  const result = [];
  for (const name of files) {
    if (/[^unfinshed]\.md$/.test(name) && name !== "index.md") {
      result.push({ name: path.basename(name, ".md"), ...parsePage(name) });
    }
  }
  return result.sort((a, b) => {
    return dayjs(a.date).isBefore(dayjs(b.date)) ? 1 : -1;
  });
};

const headersCache = new Map();
const parsePage = (link) => {
  const fullPath = path.join(__dirname, link);
  const timestamp = fs.statSync(fullPath).mtimeMs;
  const cached = headersCache.get(fullPath);
  if (cached && timestamp === cached.timestamp) {
    return cached;
  }

  const src = fs.readFileSync(fullPath, "utf-8");
  const { data } = matter(src);

  const now = new Date();
  const result = {
    timestamp,
    title: data.title || "无标题",
    date: data.date || now.toISOString(),
  };

  headersCache.set(fullPath, result);
  return result;
};
