class CustomStack:

    def __init__(self, maxSize: int):
        self.st = []
        self.cur = 0
        self.maxSize = maxSize


    def push(self, x: int) -> None:
        if self.cur < self.maxSize:
            self.st.append(x)
            self.cur += 1


    def pop(self) -> int:
        if self.cur == 0:
            return -1
        self.cur -= 1
        return self.st.pop()


    def increment(self, k: int, val: int) -> None:
        for i in range(0, min(self.cur, k)):
            self.st[i] += val



# Your CustomStack object will be instantiated and called as such:
# obj = CustomStack(maxSize)
# obj.push(x)
# param_2 = obj.pop()
# obj.increment(k,val)