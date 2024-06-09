export function test_list(list: List<number>): void {
    list.append(5);
    list.append(7);
    list.append(9);

    expect(list.get(2)).toEqual(9);
    expect(list.removeAt(1)).toEqual(7);
    expect(list.length).toEqual(2);

    list.append(11);
    expect(list.removeAt(1)).toEqual(9);
    expect(list.length).toEqual(2);
    expect(list.remove(9)).toEqual(undefined);
    expect(list.remove(11)).toEqual(11);
    expect(list.removeAt(0)).toEqual(5);
    expect(list.length).toEqual(0);

    list.prepend(5);
    list.prepend(7);
    list.prepend(9);

    expect(list.get(2)).toEqual(5);
    expect(list.get(0)).toEqual(9);
    expect(list.remove(9)).toEqual(9);
    expect(list.length).toEqual(2);
    expect(list.get(0)).toEqual(7);

    list.insertAt(1, 0);
    list.insertAt(2, 0);

    expect(list.get(0)).toEqual(2);
    expect(list.get(1)).toEqual(1);
    expect(list.get(2)).toEqual(7);
    expect(list.get(3)).toEqual(5);

    list.insertAt(9, 2);

    expect(list.get(0)).toEqual(2);
    expect(list.get(1)).toEqual(1);
    expect(list.get(2)).toEqual(9);
    expect(list.get(3)).toEqual(7);
    expect(list.get(4)).toEqual(5);

    list.insertAt(42, 999);

    expect(list.get(5)).toEqual(42);
    expect(list.remove(9)).toEqual(9);
    expect(list.remove(42)).toEqual(42);

    expect(list.get(0)).toEqual(2);
    expect(list.get(1)).toEqual(1);
    expect(list.get(2)).toEqual(7);
    expect(list.get(3)).toEqual(5);
    expect(list.length).toEqual(4);
}
