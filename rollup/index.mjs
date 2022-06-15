const userSchema = {
    name: {
        type: String,
        default: null,
    },
    address: {
        type: String,
        default: null,
    },
    email: {
        type: String,
        default: null,
    },
    phoneNumber: {
        type: String,
        default: null,
    },
    age: {
        type: Number,
        default: null,
    },
};

// 커밋 테스트
module.exports = userSchema;
//하는김에 connection 방식도 바꾸자.
// factory 패턴 -> 다시 단일 connect를 사용한 패턴으로
//# sourceMappingURL=index.mjs.map
