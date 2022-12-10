export enum TaskStatus {
    OPEN = "Open",
    IN_PROGRESS = "In Progress",
    FINISHED = "Finished",
}

export type TaskObject = {
    id: string;
    title: string;
    description?: string;
    status: TaskStatus;
};
