/** @constructor */
ScalaJS.c.java_util_Arrays$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.java_util_Arrays$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.java_util_Arrays$.prototype.constructor = ScalaJS.c.java_util_Arrays$;
ScalaJS.c.java_util_Arrays$.prototype.sort__AO__Ljava_util_Comparator__V = (function(array, comparator) {
  var jsArray = array.underlying;
  jsArray["sort"]((function(comparator$1) {
    return (function(o1, o2) {
      return ScalaJS.modules.java_util_Arrays().java$util$Arrays$$compareFn$1__O__O__Ljava_util_Comparator__Lscala_scalajs_js_Number(o1, o2, comparator$1)
    })
  })(comparator))
});
ScalaJS.c.java_util_Arrays$.prototype.fill__AZ__Z__V = (function(a, value) {
  var i = 0;
  while ((i < a.underlying.length)) {
    a.underlying[i] = value;
    i = (i + 1)
  }
});
ScalaJS.c.java_util_Arrays$.prototype.fill__AZ__I__I__Z__V = (function(a, fromIndex, toIndex, value) {
  var i = fromIndex;
  while ((i < toIndex)) {
    a.underlying[i] = value;
    i = (i + 1)
  }
});
ScalaJS.c.java_util_Arrays$.prototype.fill__AB__B__V = (function(a, value) {
  var i = 0;
  while ((i < a.underlying.length)) {
    a.underlying[i] = value;
    i = (i + 1)
  }
});
ScalaJS.c.java_util_Arrays$.prototype.fill__AB__I__I__B__V = (function(a, fromIndex, toIndex, value) {
  var i = fromIndex;
  while ((i < toIndex)) {
    a.underlying[i] = value;
    i = (i + 1)
  }
});
ScalaJS.c.java_util_Arrays$.prototype.fill__AC__C__V = (function(a, value) {
  var i = 0;
  while ((i < a.underlying.length)) {
    a.underlying[i] = value;
    i = (i + 1)
  }
});
ScalaJS.c.java_util_Arrays$.prototype.fill__AC__I__I__C__V = (function(a, fromIndex, toIndex, value) {
  var i = fromIndex;
  while ((i < toIndex)) {
    a.underlying[i] = value;
    i = (i + 1)
  }
});
ScalaJS.c.java_util_Arrays$.prototype.fill__AS__S__V = (function(a, value) {
  var i = 0;
  while ((i < a.underlying.length)) {
    a.underlying[i] = value;
    i = (i + 1)
  }
});
ScalaJS.c.java_util_Arrays$.prototype.fill__AS__I__I__S__V = (function(a, fromIndex, toIndex, value) {
  var i = fromIndex;
  while ((i < toIndex)) {
    a.underlying[i] = value;
    i = (i + 1)
  }
});
ScalaJS.c.java_util_Arrays$.prototype.fill__AI__I__V = (function(a, value) {
  var i = 0;
  while ((i < a.underlying.length)) {
    a.underlying[i] = value;
    i = (i + 1)
  }
});
ScalaJS.c.java_util_Arrays$.prototype.fill__AI__I__I__I__V = (function(a, fromIndex, toIndex, value) {
  var i = fromIndex;
  while ((i < toIndex)) {
    a.underlying[i] = value;
    i = (i + 1)
  }
});
ScalaJS.c.java_util_Arrays$.prototype.fill__AJ__J__V = (function(a, value) {
  var i = 0;
  while ((i < a.underlying.length)) {
    a.underlying[i] = value;
    i = (i + 1)
  }
});
ScalaJS.c.java_util_Arrays$.prototype.fill__AJ__I__I__J__V = (function(a, fromIndex, toIndex, value) {
  var i = fromIndex;
  while ((i < toIndex)) {
    a.underlying[i] = value;
    i = (i + 1)
  }
});
ScalaJS.c.java_util_Arrays$.prototype.fill__AF__F__V = (function(a, value) {
  var i = 0;
  while ((i < a.underlying.length)) {
    a.underlying[i] = value;
    i = (i + 1)
  }
});
ScalaJS.c.java_util_Arrays$.prototype.fill__AF__I__I__F__V = (function(a, fromIndex, toIndex, value) {
  var i = fromIndex;
  while ((i < toIndex)) {
    a.underlying[i] = value;
    i = (i + 1)
  }
});
ScalaJS.c.java_util_Arrays$.prototype.fill__AD__D__V = (function(a, value) {
  var i = 0;
  while ((i < a.underlying.length)) {
    a.underlying[i] = value;
    i = (i + 1)
  }
});
ScalaJS.c.java_util_Arrays$.prototype.fill__AD__I__I__D__V = (function(a, fromIndex, toIndex, value) {
  var i = fromIndex;
  while ((i < toIndex)) {
    a.underlying[i] = value;
    i = (i + 1)
  }
});
ScalaJS.c.java_util_Arrays$.prototype.fill__AO__O__V = (function(a, value) {
  var i = 0;
  while ((i < a.underlying.length)) {
    a.underlying[i] = value;
    i = (i + 1)
  }
});
ScalaJS.c.java_util_Arrays$.prototype.fill__AO__I__I__O__V = (function(a, fromIndex, toIndex, value) {
  var i = fromIndex;
  while ((i < toIndex)) {
    a.underlying[i] = value;
    i = (i + 1)
  }
});
ScalaJS.c.java_util_Arrays$.prototype.checkIndexForBinarySearch__p1__I__I__I__V = (function(length, start, end) {
  if ((start > end)) {
    throw new ScalaJS.c.java_lang_IllegalArgumentException().init___T((((("fromIndex(" + ScalaJS.bI(start)) + ") > toIndex(") + ScalaJS.bI(end)) + ")"))
  };
  if ((0 > start)) {
    throw new ScalaJS.c.java_lang_ArrayIndexOutOfBoundsException().init___T(("Array index out of range: " + ScalaJS.bI(start)))
  };
  if ((length < end)) {
    throw new ScalaJS.c.java_lang_ArrayIndexOutOfBoundsException().init___T(("Array index out of range: " + ScalaJS.bI(end)))
  }
});
ScalaJS.c.java_util_Arrays$.prototype.binarySearch__AJ__J__I = (function(a, key) {
  return this.binarySearch__AJ__I__I__J__I(a, 0, a.underlying.length, key)
});
ScalaJS.c.java_util_Arrays$.prototype.binarySearch__AJ__I__I__J__I = (function(a, startIndex, endIndex, key) {
  this.checkIndexForBinarySearch__p1__I__I__I__V(a.underlying.length, startIndex, endIndex);
  var low = startIndex;
  var mid = -1;
  var high = (endIndex - 1);
  while ((low <= high)) {
    mid = ((low + high) >>> 1);
    if (key.$$greater__Lscala_scalajs_runtime_Long__Z(a.underlying[mid])) {
      low = (mid + 1)
    } else {
      if (key.equals__O__Z(a.underlying[mid])) {
        return mid
      } else {
        high = (mid - 1)
      }
    }
  };
  return ((-low) - 1)
});
ScalaJS.c.java_util_Arrays$.prototype.binarySearch__AI__I__I = (function(a, key) {
  return this.binarySearch__AI__I__I__I__I(a, 0, a.underlying.length, key)
});
ScalaJS.c.java_util_Arrays$.prototype.binarySearch__AI__I__I__I__I = (function(a, startIndex, endIndex, key) {
  this.checkIndexForBinarySearch__p1__I__I__I__V(a.underlying.length, startIndex, endIndex);
  var low = startIndex;
  var mid = -1;
  var high = (endIndex - 1);
  while ((low <= high)) {
    mid = ((low + high) >>> 1);
    if ((key > a.underlying[mid])) {
      low = (mid + 1)
    } else {
      if ((key === a.underlying[mid])) {
        return mid
      } else {
        high = (mid - 1)
      }
    }
  };
  return ((-low) - 1)
});
ScalaJS.c.java_util_Arrays$.prototype.binarySearch__AS__S__I = (function(a, key) {
  return this.binarySearch__AS__I__I__S__I(a, 0, a.underlying.length, key)
});
ScalaJS.c.java_util_Arrays$.prototype.binarySearch__AS__I__I__S__I = (function(a, startIndex, endIndex, key) {
  this.checkIndexForBinarySearch__p1__I__I__I__V(a.underlying.length, startIndex, endIndex);
  var low = startIndex;
  var mid = -1;
  var high = (endIndex - 1);
  while ((low <= high)) {
    mid = ((low + high) >>> 1);
    if ((key > a.underlying[mid])) {
      low = (mid + 1)
    } else {
      if ((key === a.underlying[mid])) {
        return mid
      } else {
        high = (mid - 1)
      }
    }
  };
  return ((-low) - 1)
});
ScalaJS.c.java_util_Arrays$.prototype.binarySearch__AC__C__I = (function(a, key) {
  return this.binarySearch__AC__I__I__C__I(a, 0, a.underlying.length, key)
});
ScalaJS.c.java_util_Arrays$.prototype.binarySearch__AC__I__I__C__I = (function(a, startIndex, endIndex, key) {
  this.checkIndexForBinarySearch__p1__I__I__I__V(a.underlying.length, startIndex, endIndex);
  var low = startIndex;
  var mid = -1;
  var high = (endIndex - 1);
  while ((low <= high)) {
    mid = ((low + high) >>> 1);
    if ((key > a.underlying[mid])) {
      low = (mid + 1)
    } else {
      if ((key === a.underlying[mid])) {
        return mid
      } else {
        high = (mid - 1)
      }
    }
  };
  return ((-low) - 1)
});
ScalaJS.c.java_util_Arrays$.prototype.binarySearch__AF__F__I = (function(a, key) {
  return this.binarySearch__AF__I__I__F__I(a, 0, a.underlying.length, key)
});
ScalaJS.c.java_util_Arrays$.prototype.binarySearch__AF__I__I__F__I = (function(a, startIndex, endIndex, key) {
  this.checkIndexForBinarySearch__p1__I__I__I__V(a.underlying.length, startIndex, endIndex);
  var low = startIndex;
  var mid = -1;
  var high = (endIndex - 1);
  while ((low <= high)) {
    mid = ((low + high) >>> 1);
    if ((key > a.underlying[mid])) {
      low = (mid + 1)
    } else {
      if ((key === a.underlying[mid])) {
        return mid
      } else {
        high = (mid - 1)
      }
    }
  };
  return ((-low) - 1)
});
ScalaJS.c.java_util_Arrays$.prototype.binarySearch__AD__D__I = (function(a, key) {
  return this.binarySearch__AD__I__I__D__I(a, 0, a.underlying.length, key)
});
ScalaJS.c.java_util_Arrays$.prototype.binarySearch__AD__I__I__D__I = (function(a, startIndex, endIndex, key) {
  this.checkIndexForBinarySearch__p1__I__I__I__V(a.underlying.length, startIndex, endIndex);
  var low = startIndex;
  var mid = -1;
  var high = (endIndex - 1);
  while ((low <= high)) {
    mid = ((low + high) >>> 1);
    if ((key > a.underlying[mid])) {
      low = (mid + 1)
    } else {
      if ((key === a.underlying[mid])) {
        return mid
      } else {
        high = (mid - 1)
      }
    }
  };
  return ((-low) - 1)
});
ScalaJS.c.java_util_Arrays$.prototype.binarySearch__AO__O__I = (function(a, key) {
  return this.binarySearch__AO__I__I__O__I(a, 0, a.underlying.length, key)
});
ScalaJS.c.java_util_Arrays$.prototype.binarySearch__AO__I__I__O__I = (function(a, startIndex, endIndex, key) {
  this.checkIndexForBinarySearch__p1__I__I__I__V(a.underlying.length, startIndex, endIndex);
  var low = startIndex;
  var mid = -1;
  var high = (endIndex - 1);
  while ((low <= high)) {
    mid = ((low + high) >>> 1);
    if ((ScalaJS.comparableCompareTo(ScalaJS.as.java_lang_Comparable(key), a.underlying[mid]) > 0)) {
      low = (mid + 1)
    } else {
      if ((ScalaJS.comparableCompareTo(ScalaJS.as.java_lang_Comparable(key), a.underlying[mid]) === 0)) {
        return mid
      } else {
        high = (mid - 1)
      }
    }
  };
  return ((-low) - 1)
});
ScalaJS.c.java_util_Arrays$.prototype.copyOf__AI__I__AI = (function(original, newLen) {
  if ((newLen >= 0)) {
    return this.copyOfRange__AI__I__I__AI(original, 0, newLen)
  };
  throw new ScalaJS.c.java_lang_NegativeArraySizeException().init___()
});
ScalaJS.c.java_util_Arrays$.prototype.copyOfRange__AI__I__I__AI = (function(original, start, end) {
  if ((start <= end)) {
    if (((0 <= start) && (start <= original.underlying.length))) {
      var retLength = (end - start);
      var copyLength = ScalaJS.modules.java_lang_Math().min__I__I__I(retLength, (original.underlying.length - start));
      var ret = ScalaJS.newArrayObject(ScalaJS.data.scala_Int.getArrayOf(), [retLength]);
      ScalaJS.modules.java_lang_System().arraycopy__O__I__O__I__I__V(original, start, ret, 0, copyLength);
      return ret
    };
    throw new ScalaJS.c.java_lang_ArrayIndexOutOfBoundsException().init___()
  };
  throw new ScalaJS.c.java_lang_IllegalArgumentException().init___()
});
ScalaJS.c.java_util_Arrays$.prototype.copyOf__AJ__I__AJ = (function(original, newLen) {
  if ((newLen >= 0)) {
    return this.copyOfRange__AJ__I__I__AJ(original, 0, newLen)
  };
  throw new ScalaJS.c.java_lang_NegativeArraySizeException().init___()
});
ScalaJS.c.java_util_Arrays$.prototype.copyOfRange__AJ__I__I__AJ = (function(original, start, end) {
  if ((start <= end)) {
    if (((0 <= start) && (start <= original.underlying.length))) {
      var retLength = (end - start);
      var copyLength = ScalaJS.modules.java_lang_Math().min__I__I__I(retLength, (original.underlying.length - start));
      var ret = ScalaJS.newArrayObject(ScalaJS.data.scala_Long.getArrayOf(), [retLength]);
      ScalaJS.modules.java_lang_System().arraycopy__O__I__O__I__I__V(original, start, ret, 0, copyLength);
      return ret
    };
    throw new ScalaJS.c.java_lang_ArrayIndexOutOfBoundsException().init___()
  };
  throw new ScalaJS.c.java_lang_IllegalArgumentException().init___()
});
ScalaJS.c.java_util_Arrays$.prototype.copyOf__AS__I__AS = (function(original, newLen) {
  if ((newLen >= 0)) {
    return this.copyOfRange__AS__I__I__AS(original, 0, newLen)
  };
  throw new ScalaJS.c.java_lang_NegativeArraySizeException().init___()
});
ScalaJS.c.java_util_Arrays$.prototype.copyOfRange__AS__I__I__AS = (function(original, start, end) {
  if ((start <= end)) {
    if (((0 <= start) && (start <= original.underlying.length))) {
      var retLength = (end - start);
      var copyLength = ScalaJS.modules.java_lang_Math().min__I__I__I(retLength, (original.underlying.length - start));
      var ret = ScalaJS.newArrayObject(ScalaJS.data.scala_Short.getArrayOf(), [retLength]);
      ScalaJS.modules.java_lang_System().arraycopy__O__I__O__I__I__V(original, start, ret, 0, copyLength);
      return ret
    };
    throw new ScalaJS.c.java_lang_ArrayIndexOutOfBoundsException().init___()
  };
  throw new ScalaJS.c.java_lang_IllegalArgumentException().init___()
});
ScalaJS.c.java_util_Arrays$.prototype.copyOf__AB__I__AB = (function(original, newLen) {
  if ((newLen >= 0)) {
    return this.copyOfRange__AB__I__I__AB(original, 0, newLen)
  };
  throw new ScalaJS.c.java_lang_NegativeArraySizeException().init___()
});
ScalaJS.c.java_util_Arrays$.prototype.copyOfRange__AB__I__I__AB = (function(original, start, end) {
  if ((start <= end)) {
    if (((0 <= start) && (start <= original.underlying.length))) {
      var retLength = (end - start);
      var copyLength = ScalaJS.modules.java_lang_Math().min__I__I__I(retLength, (original.underlying.length - start));
      var ret = ScalaJS.newArrayObject(ScalaJS.data.scala_Byte.getArrayOf(), [retLength]);
      ScalaJS.modules.java_lang_System().arraycopy__O__I__O__I__I__V(original, start, ret, 0, copyLength);
      return ret
    };
    throw new ScalaJS.c.java_lang_ArrayIndexOutOfBoundsException().init___()
  };
  throw new ScalaJS.c.java_lang_IllegalArgumentException().init___()
});
ScalaJS.c.java_util_Arrays$.prototype.copyOf__AC__I__AC = (function(original, newLen) {
  if ((newLen >= 0)) {
    return this.copyOfRange__AC__I__I__AC(original, 0, newLen)
  };
  throw new ScalaJS.c.java_lang_NegativeArraySizeException().init___()
});
ScalaJS.c.java_util_Arrays$.prototype.copyOfRange__AC__I__I__AC = (function(original, start, end) {
  if ((start <= end)) {
    if (((0 <= start) && (start <= original.underlying.length))) {
      var retLength = (end - start);
      var copyLength = ScalaJS.modules.java_lang_Math().min__I__I__I(retLength, (original.underlying.length - start));
      var ret = ScalaJS.newArrayObject(ScalaJS.data.scala_Char.getArrayOf(), [retLength]);
      ScalaJS.modules.java_lang_System().arraycopy__O__I__O__I__I__V(original, start, ret, 0, copyLength);
      return ret
    };
    throw new ScalaJS.c.java_lang_ArrayIndexOutOfBoundsException().init___()
  };
  throw new ScalaJS.c.java_lang_IllegalArgumentException().init___()
});
ScalaJS.c.java_util_Arrays$.prototype.copyOf__AF__I__AF = (function(original, newLen) {
  if ((newLen >= 0)) {
    return this.copyOfRange__AF__I__I__AF(original, 0, newLen)
  };
  throw new ScalaJS.c.java_lang_NegativeArraySizeException().init___()
});
ScalaJS.c.java_util_Arrays$.prototype.copyOfRange__AF__I__I__AF = (function(original, start, end) {
  if ((start <= end)) {
    if (((0 <= start) && (start <= original.underlying.length))) {
      var retLength = (end - start);
      var copyLength = ScalaJS.modules.java_lang_Math().min__I__I__I(retLength, (original.underlying.length - start));
      var ret = ScalaJS.newArrayObject(ScalaJS.data.scala_Float.getArrayOf(), [retLength]);
      ScalaJS.modules.java_lang_System().arraycopy__O__I__O__I__I__V(original, start, ret, 0, copyLength);
      return ret
    };
    throw new ScalaJS.c.java_lang_ArrayIndexOutOfBoundsException().init___()
  };
  throw new ScalaJS.c.java_lang_IllegalArgumentException().init___()
});
ScalaJS.c.java_util_Arrays$.prototype.copyOf__AD__I__AD = (function(original, newLen) {
  if ((newLen >= 0)) {
    return this.copyOfRange__AD__I__I__AD(original, 0, newLen)
  };
  throw new ScalaJS.c.java_lang_NegativeArraySizeException().init___()
});
ScalaJS.c.java_util_Arrays$.prototype.copyOfRange__AD__I__I__AD = (function(original, start, end) {
  if ((start <= end)) {
    if (((0 <= start) && (start <= original.underlying.length))) {
      var retLength = (end - start);
      var copyLength = ScalaJS.modules.java_lang_Math().min__I__I__I(retLength, (original.underlying.length - start));
      var ret = ScalaJS.newArrayObject(ScalaJS.data.scala_Double.getArrayOf(), [retLength]);
      ScalaJS.modules.java_lang_System().arraycopy__O__I__O__I__I__V(original, start, ret, 0, copyLength);
      return ret
    };
    throw new ScalaJS.c.java_lang_ArrayIndexOutOfBoundsException().init___()
  };
  throw new ScalaJS.c.java_lang_IllegalArgumentException().init___()
});
ScalaJS.c.java_util_Arrays$.prototype.copyOf__AZ__I__AZ = (function(original, newLen) {
  if ((newLen >= 0)) {
    return this.copyOfRange__AZ__I__I__AZ(original, 0, newLen)
  };
  throw new ScalaJS.c.java_lang_NegativeArraySizeException().init___()
});
ScalaJS.c.java_util_Arrays$.prototype.copyOfRange__AZ__I__I__AZ = (function(original, start, end) {
  if ((start <= end)) {
    if (((0 <= start) && (start <= original.underlying.length))) {
      var retLength = (end - start);
      var copyLength = ScalaJS.modules.java_lang_Math().min__I__I__I(retLength, (original.underlying.length - start));
      var ret = ScalaJS.newArrayObject(ScalaJS.data.scala_Boolean.getArrayOf(), [retLength]);
      ScalaJS.modules.java_lang_System().arraycopy__O__I__O__I__I__V(original, start, ret, 0, copyLength);
      return ret
    };
    throw new ScalaJS.c.java_lang_ArrayIndexOutOfBoundsException().init___()
  };
  throw new ScalaJS.c.java_lang_IllegalArgumentException().init___()
});
ScalaJS.c.java_util_Arrays$.prototype.copyOf__AO__I__AO = (function(original, newLen) {
  if ((newLen >= 0)) {
    return this.copyOfRange__AO__I__I__AO(original, 0, newLen)
  };
  throw new ScalaJS.c.java_lang_NegativeArraySizeException().init___()
});
ScalaJS.c.java_util_Arrays$.prototype.copyOfRange__AO__I__I__AO = (function(original, start, end) {
  if ((start <= end)) {
    if (((0 <= start) && (start <= original.underlying.length))) {
      var retLength = (end - start);
      var copyLength = ScalaJS.modules.java_lang_Math().min__I__I__I(retLength, (original.underlying.length - start));
      var ret = ScalaJS.newArrayObject(ScalaJS.data.java_lang_Object.getArrayOf(), [retLength]);
      ScalaJS.modules.java_lang_System().arraycopy__O__I__O__I__I__V(original, start, ret, 0, copyLength);
      return ret
    };
    throw new ScalaJS.c.java_lang_ArrayIndexOutOfBoundsException().init___()
  };
  throw new ScalaJS.c.java_lang_IllegalArgumentException().init___()
});
ScalaJS.c.java_util_Arrays$.prototype.java$util$Arrays$$compareFn$1__O__O__Ljava_util_Comparator__Lscala_scalajs_js_Number = (function(o1, o2, comparator$1) {
  return comparator$1.compare__O__O__I(o1, o2)
});
ScalaJS.c.java_util_Arrays$.prototype.java$util$Arrays$$compareFn$1__O__O__Ljava_util_Comparator__ = (function(o1, o2, comparator$1) {
  return this.java$util$Arrays$$compareFn$1__O__O__Ljava_util_Comparator__Lscala_scalajs_js_Number(o1, o2, comparator$1)
});
ScalaJS.c.java_util_Arrays$.prototype.copyOfRange__AO__I__I__ = (function(original, start, end) {
  return this.copyOfRange__AO__I__I__AO(original, start, end)
});
ScalaJS.c.java_util_Arrays$.prototype.copyOf__AO__I__ = (function(original$2, newLen) {
  return this.copyOf__AO__I__AO(original$2, newLen)
});
ScalaJS.c.java_util_Arrays$.prototype.copyOfRange__AZ__I__I__ = (function(original$3, start$2, end$2) {
  return this.copyOfRange__AZ__I__I__AZ(original$3, start$2, end$2)
});
ScalaJS.c.java_util_Arrays$.prototype.copyOf__AZ__I__ = (function(original$4, newLen$2) {
  return this.copyOf__AZ__I__AZ(original$4, newLen$2)
});
ScalaJS.c.java_util_Arrays$.prototype.copyOfRange__AD__I__I__ = (function(original$5, start$3, end$3) {
  return this.copyOfRange__AD__I__I__AD(original$5, start$3, end$3)
});
ScalaJS.c.java_util_Arrays$.prototype.copyOf__AD__I__ = (function(original$6, newLen$3) {
  return this.copyOf__AD__I__AD(original$6, newLen$3)
});
ScalaJS.c.java_util_Arrays$.prototype.copyOfRange__AF__I__I__ = (function(original$7, start$4, end$4) {
  return this.copyOfRange__AF__I__I__AF(original$7, start$4, end$4)
});
ScalaJS.c.java_util_Arrays$.prototype.copyOf__AF__I__ = (function(original$8, newLen$4) {
  return this.copyOf__AF__I__AF(original$8, newLen$4)
});
ScalaJS.c.java_util_Arrays$.prototype.copyOfRange__AC__I__I__ = (function(original$9, start$5, end$5) {
  return this.copyOfRange__AC__I__I__AC(original$9, start$5, end$5)
});
ScalaJS.c.java_util_Arrays$.prototype.copyOf__AC__I__ = (function(original$10, newLen$5) {
  return this.copyOf__AC__I__AC(original$10, newLen$5)
});
ScalaJS.c.java_util_Arrays$.prototype.copyOfRange__AB__I__I__ = (function(original$11, start$6, end$6) {
  return this.copyOfRange__AB__I__I__AB(original$11, start$6, end$6)
});
ScalaJS.c.java_util_Arrays$.prototype.copyOf__AB__I__ = (function(original$12, newLen$6) {
  return this.copyOf__AB__I__AB(original$12, newLen$6)
});
ScalaJS.c.java_util_Arrays$.prototype.copyOfRange__AS__I__I__ = (function(original$13, start$7, end$7) {
  return this.copyOfRange__AS__I__I__AS(original$13, start$7, end$7)
});
ScalaJS.c.java_util_Arrays$.prototype.copyOf__AS__I__ = (function(original$14, newLen$7) {
  return this.copyOf__AS__I__AS(original$14, newLen$7)
});
ScalaJS.c.java_util_Arrays$.prototype.copyOfRange__AJ__I__I__ = (function(original$15, start$8, end$8) {
  return this.copyOfRange__AJ__I__I__AJ(original$15, start$8, end$8)
});
ScalaJS.c.java_util_Arrays$.prototype.copyOf__AJ__I__ = (function(original$16, newLen$8) {
  return this.copyOf__AJ__I__AJ(original$16, newLen$8)
});
ScalaJS.c.java_util_Arrays$.prototype.copyOfRange__AI__I__I__ = (function(original$17, start$9, end$9) {
  return this.copyOfRange__AI__I__I__AI(original$17, start$9, end$9)
});
ScalaJS.c.java_util_Arrays$.prototype.copyOf__AI__I__ = (function(original$18, newLen$9) {
  return this.copyOf__AI__I__AI(original$18, newLen$9)
});
ScalaJS.c.java_util_Arrays$.prototype.binarySearch__AO__I__I__O__ = (function(a, startIndex, endIndex, key) {
  return ScalaJS.bI(this.binarySearch__AO__I__I__O__I(a, startIndex, endIndex, key))
});
ScalaJS.c.java_util_Arrays$.prototype.binarySearch__AO__O__ = (function(a$2, key$2) {
  return ScalaJS.bI(this.binarySearch__AO__O__I(a$2, key$2))
});
ScalaJS.c.java_util_Arrays$.prototype.binarySearch__AD__I__I__D__ = (function(a$3, startIndex$2, endIndex$2, key$3) {
  return ScalaJS.bI(this.binarySearch__AD__I__I__D__I(a$3, startIndex$2, endIndex$2, key$3))
});
ScalaJS.c.java_util_Arrays$.prototype.binarySearch__AD__D__ = (function(a$4, key$4) {
  return ScalaJS.bI(this.binarySearch__AD__D__I(a$4, key$4))
});
ScalaJS.c.java_util_Arrays$.prototype.binarySearch__AF__I__I__F__ = (function(a$5, startIndex$3, endIndex$3, key$5) {
  return ScalaJS.bI(this.binarySearch__AF__I__I__F__I(a$5, startIndex$3, endIndex$3, key$5))
});
ScalaJS.c.java_util_Arrays$.prototype.binarySearch__AF__F__ = (function(a$6, key$6) {
  return ScalaJS.bI(this.binarySearch__AF__F__I(a$6, key$6))
});
ScalaJS.c.java_util_Arrays$.prototype.binarySearch__AC__I__I__C__ = (function(a$7, startIndex$4, endIndex$4, key$7) {
  return ScalaJS.bI(this.binarySearch__AC__I__I__C__I(a$7, startIndex$4, endIndex$4, key$7))
});
ScalaJS.c.java_util_Arrays$.prototype.binarySearch__AC__C__ = (function(a$8, key$8) {
  return ScalaJS.bI(this.binarySearch__AC__C__I(a$8, key$8))
});
ScalaJS.c.java_util_Arrays$.prototype.binarySearch__AS__I__I__S__ = (function(a$9, startIndex$5, endIndex$5, key$9) {
  return ScalaJS.bI(this.binarySearch__AS__I__I__S__I(a$9, startIndex$5, endIndex$5, key$9))
});
ScalaJS.c.java_util_Arrays$.prototype.binarySearch__AS__S__ = (function(a$10, key$10) {
  return ScalaJS.bI(this.binarySearch__AS__S__I(a$10, key$10))
});
ScalaJS.c.java_util_Arrays$.prototype.binarySearch__AI__I__I__I__ = (function(a$11, startIndex$6, endIndex$6, key$11) {
  return ScalaJS.bI(this.binarySearch__AI__I__I__I__I(a$11, startIndex$6, endIndex$6, key$11))
});
ScalaJS.c.java_util_Arrays$.prototype.binarySearch__AI__I__ = (function(a$12, key$12) {
  return ScalaJS.bI(this.binarySearch__AI__I__I(a$12, key$12))
});
ScalaJS.c.java_util_Arrays$.prototype.binarySearch__AJ__I__I__J__ = (function(a$13, startIndex$7, endIndex$7, key$13) {
  return ScalaJS.bI(this.binarySearch__AJ__I__I__J__I(a$13, startIndex$7, endIndex$7, key$13))
});
ScalaJS.c.java_util_Arrays$.prototype.binarySearch__AJ__J__ = (function(a$14, key$14) {
  return ScalaJS.bI(this.binarySearch__AJ__J__I(a$14, key$14))
});
ScalaJS.c.java_util_Arrays$.prototype.fill__AO__I__I__O__ = (function(a$15, fromIndex, toIndex, value) {
  return ScalaJS.bV(this.fill__AO__I__I__O__V(a$15, fromIndex, toIndex, value))
});
ScalaJS.c.java_util_Arrays$.prototype.fill__AO__O__ = (function(a$16, value$2) {
  return ScalaJS.bV(this.fill__AO__O__V(a$16, value$2))
});
ScalaJS.c.java_util_Arrays$.prototype.fill__AD__I__I__D__ = (function(a$17, fromIndex$2, toIndex$2, value$3) {
  return ScalaJS.bV(this.fill__AD__I__I__D__V(a$17, fromIndex$2, toIndex$2, value$3))
});
ScalaJS.c.java_util_Arrays$.prototype.fill__AD__D__ = (function(a$18, value$4) {
  return ScalaJS.bV(this.fill__AD__D__V(a$18, value$4))
});
ScalaJS.c.java_util_Arrays$.prototype.fill__AF__I__I__F__ = (function(a$19, fromIndex$3, toIndex$3, value$5) {
  return ScalaJS.bV(this.fill__AF__I__I__F__V(a$19, fromIndex$3, toIndex$3, value$5))
});
ScalaJS.c.java_util_Arrays$.prototype.fill__AF__F__ = (function(a$20, value$6) {
  return ScalaJS.bV(this.fill__AF__F__V(a$20, value$6))
});
ScalaJS.c.java_util_Arrays$.prototype.fill__AJ__I__I__J__ = (function(a$21, fromIndex$4, toIndex$4, value$7) {
  return ScalaJS.bV(this.fill__AJ__I__I__J__V(a$21, fromIndex$4, toIndex$4, value$7))
});
ScalaJS.c.java_util_Arrays$.prototype.fill__AJ__J__ = (function(a$22, value$8) {
  return ScalaJS.bV(this.fill__AJ__J__V(a$22, value$8))
});
ScalaJS.c.java_util_Arrays$.prototype.fill__AI__I__I__I__ = (function(a$23, fromIndex$5, toIndex$5, value$9) {
  return ScalaJS.bV(this.fill__AI__I__I__I__V(a$23, fromIndex$5, toIndex$5, value$9))
});
ScalaJS.c.java_util_Arrays$.prototype.fill__AI__I__ = (function(a$24, value$10) {
  return ScalaJS.bV(this.fill__AI__I__V(a$24, value$10))
});
ScalaJS.c.java_util_Arrays$.prototype.fill__AS__I__I__S__ = (function(a$25, fromIndex$6, toIndex$6, value$11) {
  return ScalaJS.bV(this.fill__AS__I__I__S__V(a$25, fromIndex$6, toIndex$6, value$11))
});
ScalaJS.c.java_util_Arrays$.prototype.fill__AS__S__ = (function(a$26, value$12) {
  return ScalaJS.bV(this.fill__AS__S__V(a$26, value$12))
});
ScalaJS.c.java_util_Arrays$.prototype.fill__AC__I__I__C__ = (function(a$27, fromIndex$7, toIndex$7, value$13) {
  return ScalaJS.bV(this.fill__AC__I__I__C__V(a$27, fromIndex$7, toIndex$7, value$13))
});
ScalaJS.c.java_util_Arrays$.prototype.fill__AC__C__ = (function(a$28, value$14) {
  return ScalaJS.bV(this.fill__AC__C__V(a$28, value$14))
});
ScalaJS.c.java_util_Arrays$.prototype.fill__AB__I__I__B__ = (function(a$29, fromIndex$8, toIndex$8, value$15) {
  return ScalaJS.bV(this.fill__AB__I__I__B__V(a$29, fromIndex$8, toIndex$8, value$15))
});
ScalaJS.c.java_util_Arrays$.prototype.fill__AB__B__ = (function(a$30, value$16) {
  return ScalaJS.bV(this.fill__AB__B__V(a$30, value$16))
});
ScalaJS.c.java_util_Arrays$.prototype.fill__AZ__I__I__Z__ = (function(a$31, fromIndex$9, toIndex$9, value$17) {
  return ScalaJS.bV(this.fill__AZ__I__I__Z__V(a$31, fromIndex$9, toIndex$9, value$17))
});
ScalaJS.c.java_util_Arrays$.prototype.fill__AZ__Z__ = (function(a$32, value$18) {
  return ScalaJS.bV(this.fill__AZ__Z__V(a$32, value$18))
});
ScalaJS.c.java_util_Arrays$.prototype.sort__AO__Ljava_util_Comparator__ = (function(array, comparator) {
  return ScalaJS.bV(this.sort__AO__Ljava_util_Comparator__V(array, comparator))
});
/** @constructor */
ScalaJS.inheritable.java_util_Arrays$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.java_util_Arrays$.prototype = ScalaJS.c.java_util_Arrays$.prototype;
ScalaJS.is.java_util_Arrays$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.java_util_Arrays$)))
});
ScalaJS.as.java_util_Arrays$ = (function(obj) {
  if ((ScalaJS.is.java_util_Arrays$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.util.Arrays")
  }
});
ScalaJS.isArrayOf.java_util_Arrays$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_util_Arrays$)))
});
ScalaJS.asArrayOf.java_util_Arrays$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_util_Arrays$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.util.Arrays;", depth)
  }
});
ScalaJS.data.java_util_Arrays$ = new ScalaJS.ClassTypeData({
  java_util_Arrays$: 0
}, false, "java.util.Arrays$", ScalaJS.data.java_lang_Object, {
  java_util_Arrays$: 1,
  java_lang_Object: 1
});
ScalaJS.c.java_util_Arrays$.prototype.$classData = ScalaJS.data.java_util_Arrays$;
ScalaJS.moduleInstances.java_util_Arrays = undefined;
ScalaJS.modules.java_util_Arrays = (function() {
  if ((!ScalaJS.moduleInstances.java_util_Arrays)) {
    ScalaJS.moduleInstances.java_util_Arrays = new ScalaJS.c.java_util_Arrays$().init___()
  };
  return ScalaJS.moduleInstances.java_util_Arrays
});
//@ sourceMappingURL=Arrays$.js.map
