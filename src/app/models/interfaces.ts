
export interface LoginEntity {
    id: number;
    username: string;
    password: string;
  }
  
export interface TestCase {
    id: number;
    input1: string;
    input2: string;
    result: string;
    status: string;
    projectEntity: number;
  }
  
// export interface Project {
//     id: number;
//     projectTitle: string;
//     description: string;
// }
export interface Project {
  id: number;
  projectTitle: string;
  description: string;
  loginEntity: LoginEntity;
  testCases: TestCase[];
}
