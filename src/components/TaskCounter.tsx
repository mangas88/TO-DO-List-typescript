type TaskCounterProps = {
  taskNumber: number | string
}

function TaskCounter({taskNumber}: TaskCounterProps) {
  return (
    <h2 id="list-heading" className="list-heading">
      {taskNumber} task in questa lista
    </h2>
  );
}

export default TaskCounter;
