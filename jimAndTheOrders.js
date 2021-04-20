function jimOrders(orders) {
    return orders
        .map((order, idx) => [order[0] + order[1], idx])
        .sort(([totalA, idxA], [totalB, idxB]) => totalA - totalB ? totalA - totalB : idxA - idxB)
        .map(([_, idx]) => idx + 1);
}
