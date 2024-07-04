def delete_nth(order,max_e):
    new_order=[]
    for i in order:
        if new_order.count(i)< max_e:
            new_order.append(i)
    return new_order