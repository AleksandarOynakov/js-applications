function construct(obj) {
    if (obj.dizziness) {
        obj.levelOfHydrated += obj.experience * 0.1 * obj.weight;
        obj.dizziness = false;
    }
    return obj;
}