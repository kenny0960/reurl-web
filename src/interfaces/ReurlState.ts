import Result from "@/interfaces/Result";

interface ReurlState {
  url: string;
  isUrlValid: boolean;
  result: Result | null;
}

export default ReurlState;
