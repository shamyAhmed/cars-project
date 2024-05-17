export type Role = "Admin" | "Staff" | null

export interface User {
    name: string,
    email: string,
    token: string,
    role: Role
}