/** @constructor */
ScalaJS.c.scala_scalajs_js_Any$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_scalajs_js_Any$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_scalajs_js_Any$.prototype.constructor = ScalaJS.c.scala_scalajs_js_Any$;
ScalaJS.c.scala_scalajs_js_Any$.prototype.fromLong__J__Lscala_scalajs_js_Number = (function(value) {
  return value.toDouble__D()
});
ScalaJS.c.scala_scalajs_js_Any$.prototype.fromArray__O__Lscala_scalajs_js_Array = (function(array) {
  var length = ScalaJS.modules.scala_runtime_ScalaRunTime().array$undlength__O__I(array);
  var result = new ScalaJS.g["Array"](length);
  var i = 0;
  while ((i < length)) {
    result[i] = ScalaJS.modules.scala_runtime_ScalaRunTime().array$undapply__O__I__O(array, i);
    i = (i + 1)
  };
  return result
});
ScalaJS.c.scala_scalajs_js_Any$.prototype.toArray__Lscala_scalajs_js_Array__Lscala_reflect_ClassTag__O = (function(array, evidence$1) {
  var length = new ScalaJS.c.scala_runtime_RichDouble().init___D(this.richDouble__Lscala_scalajs_js_Number__D(array["length"])).toInt__I();
  var result = evidence$1.newArray__I__O(length);
  var i = 0;
  while ((i < length)) {
    ScalaJS.modules.scala_runtime_ScalaRunTime().array$undupdate__O__I__O__V(result, i, array[i]);
    i = (i + 1)
  };
  return result
});
ScalaJS.c.scala_scalajs_js_Any$.prototype.fromTraversableOnce__Lscala_collection_TraversableOnce__Lscala_scalajs_js_Array = (function(col) {
  var result = new ScalaJS.g["Array"]();
  col.foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(result$1) {
    return (function(x) {
      return result$1["push"](x)
    })
  })(result)));
  return result
});
ScalaJS.c.scala_scalajs_js_Any$.prototype.arrayOps__Lscala_scalajs_js_Array__Lscala_reflect_ClassTag__Lscala_collection_mutable_ArrayOps = (function(array, evidence$2) {
  return ScalaJS.modules.scala_Predef().genericArrayOps__O__Lscala_collection_mutable_ArrayOps(this.toArray__Lscala_scalajs_js_Array__Lscala_reflect_ClassTag__O(array, evidence$2))
});
ScalaJS.c.scala_scalajs_js_Any$.prototype.stringOps__Lscala_scalajs_js_String__T = (function(string) {
  return string
});
ScalaJS.c.scala_scalajs_js_Any$.prototype.richDouble__Lscala_scalajs_js_Number__D = (function(num) {
  return num
});
ScalaJS.c.scala_scalajs_js_Any$.prototype.richBoolean__Lscala_scalajs_js_Boolean__Z = (function(b) {
  return b
});
ScalaJS.c.scala_scalajs_js_Any$.prototype.toFunction0__Lscala_scalajs_js_Function0__Lscala_Function0 = (function(f) {
  return new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function(f$23) {
    return (function() {
      return f$23()
    })
  })(f))
});
ScalaJS.c.scala_scalajs_js_Any$.prototype.toFunction1__Lscala_scalajs_js_Function1__Lscala_Function1 = (function(f) {
  return new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(f$22) {
    return (function(x1) {
      return f$22(x1)
    })
  })(f))
});
ScalaJS.c.scala_scalajs_js_Any$.prototype.toFunction2__Lscala_scalajs_js_Function2__Lscala_Function2 = (function(f) {
  return new ScalaJS.c.scala_scalajs_runtime_AnonFunction2().init___Lscala_scalajs_js_Function2((function(f$21) {
    return (function(x1, x2) {
      return f$21(x1, x2)
    })
  })(f))
});
ScalaJS.c.scala_scalajs_js_Any$.prototype.toFunction3__Lscala_scalajs_js_Function3__Lscala_Function3 = (function(f) {
  return new ScalaJS.c.scala_scalajs_runtime_AnonFunction3().init___Lscala_scalajs_js_Function3((function(f$20) {
    return (function(x1, x2, x3) {
      return f$20(x1, x2, x3)
    })
  })(f))
});
ScalaJS.c.scala_scalajs_js_Any$.prototype.toFunction4__Lscala_scalajs_js_Function4__Lscala_Function4 = (function(f) {
  return new ScalaJS.c.scala_scalajs_runtime_AnonFunction4().init___Lscala_scalajs_js_Function4((function(f$19) {
    return (function(x1, x2, x3, x4) {
      return f$19(x1, x2, x3, x4)
    })
  })(f))
});
ScalaJS.c.scala_scalajs_js_Any$.prototype.toFunction5__Lscala_scalajs_js_Function5__Lscala_Function5 = (function(f) {
  return new ScalaJS.c.scala_scalajs_runtime_AnonFunction5().init___Lscala_scalajs_js_Function5((function(f$18) {
    return (function(x1, x2, x3, x4, x5) {
      return f$18(x1, x2, x3, x4, x5)
    })
  })(f))
});
ScalaJS.c.scala_scalajs_js_Any$.prototype.toFunction6__Lscala_scalajs_js_Function6__Lscala_Function6 = (function(f) {
  return new ScalaJS.c.scala_scalajs_runtime_AnonFunction6().init___Lscala_scalajs_js_Function6((function(f$17) {
    return (function(x1, x2, x3, x4, x5, x6) {
      return f$17(x1, x2, x3, x4, x5, x6)
    })
  })(f))
});
ScalaJS.c.scala_scalajs_js_Any$.prototype.toFunction7__Lscala_scalajs_js_Function7__Lscala_Function7 = (function(f) {
  return new ScalaJS.c.scala_scalajs_runtime_AnonFunction7().init___Lscala_scalajs_js_Function7((function(f$16) {
    return (function(x1, x2, x3, x4, x5, x6, x7) {
      return f$16(x1, x2, x3, x4, x5, x6, x7)
    })
  })(f))
});
ScalaJS.c.scala_scalajs_js_Any$.prototype.toFunction8__Lscala_scalajs_js_Function8__Lscala_Function8 = (function(f) {
  return new ScalaJS.c.scala_scalajs_runtime_AnonFunction8().init___Lscala_scalajs_js_Function8((function(f$15) {
    return (function(x1, x2, x3, x4, x5, x6, x7, x8) {
      return f$15(x1, x2, x3, x4, x5, x6, x7, x8)
    })
  })(f))
});
ScalaJS.c.scala_scalajs_js_Any$.prototype.toFunction9__Lscala_scalajs_js_Function9__Lscala_Function9 = (function(f) {
  return new ScalaJS.c.scala_scalajs_runtime_AnonFunction9().init___Lscala_scalajs_js_Function9((function(f$14) {
    return (function(x1, x2, x3, x4, x5, x6, x7, x8, x9) {
      return f$14(x1, x2, x3, x4, x5, x6, x7, x8, x9)
    })
  })(f))
});
ScalaJS.c.scala_scalajs_js_Any$.prototype.toFunction10__Lscala_scalajs_js_Function10__Lscala_Function10 = (function(f) {
  return new ScalaJS.c.scala_scalajs_runtime_AnonFunction10().init___Lscala_scalajs_js_Function10((function(f$13) {
    return (function(x1, x2, x3, x4, x5, x6, x7, x8, x9, x10) {
      return f$13(x1, x2, x3, x4, x5, x6, x7, x8, x9, x10)
    })
  })(f))
});
ScalaJS.c.scala_scalajs_js_Any$.prototype.toFunction11__Lscala_scalajs_js_Function11__Lscala_Function11 = (function(f) {
  return new ScalaJS.c.scala_scalajs_runtime_AnonFunction11().init___Lscala_scalajs_js_Function11((function(f$12) {
    return (function(x1, x2, x3, x4, x5, x6, x7, x8, x9, x10, x11) {
      return f$12(x1, x2, x3, x4, x5, x6, x7, x8, x9, x10, x11)
    })
  })(f))
});
ScalaJS.c.scala_scalajs_js_Any$.prototype.toFunction12__Lscala_scalajs_js_Function12__Lscala_Function12 = (function(f) {
  return new ScalaJS.c.scala_scalajs_runtime_AnonFunction12().init___Lscala_scalajs_js_Function12((function(f$11) {
    return (function(x1, x2, x3, x4, x5, x6, x7, x8, x9, x10, x11, x12) {
      return f$11(x1, x2, x3, x4, x5, x6, x7, x8, x9, x10, x11, x12)
    })
  })(f))
});
ScalaJS.c.scala_scalajs_js_Any$.prototype.toFunction13__Lscala_scalajs_js_Function13__Lscala_Function13 = (function(f) {
  return new ScalaJS.c.scala_scalajs_runtime_AnonFunction13().init___Lscala_scalajs_js_Function13((function(f$10) {
    return (function(x1, x2, x3, x4, x5, x6, x7, x8, x9, x10, x11, x12, x13) {
      return f$10(x1, x2, x3, x4, x5, x6, x7, x8, x9, x10, x11, x12, x13)
    })
  })(f))
});
ScalaJS.c.scala_scalajs_js_Any$.prototype.toFunction14__Lscala_scalajs_js_Function14__Lscala_Function14 = (function(f) {
  return new ScalaJS.c.scala_scalajs_runtime_AnonFunction14().init___Lscala_scalajs_js_Function14((function(f$9) {
    return (function(x1, x2, x3, x4, x5, x6, x7, x8, x9, x10, x11, x12, x13, x14) {
      return f$9(x1, x2, x3, x4, x5, x6, x7, x8, x9, x10, x11, x12, x13, x14)
    })
  })(f))
});
ScalaJS.c.scala_scalajs_js_Any$.prototype.toFunction15__Lscala_scalajs_js_Function15__Lscala_Function15 = (function(f) {
  return new ScalaJS.c.scala_scalajs_runtime_AnonFunction15().init___Lscala_scalajs_js_Function15((function(f$8) {
    return (function(x1, x2, x3, x4, x5, x6, x7, x8, x9, x10, x11, x12, x13, x14, x15) {
      return f$8(x1, x2, x3, x4, x5, x6, x7, x8, x9, x10, x11, x12, x13, x14, x15)
    })
  })(f))
});
ScalaJS.c.scala_scalajs_js_Any$.prototype.toFunction16__Lscala_scalajs_js_Function16__Lscala_Function16 = (function(f) {
  return new ScalaJS.c.scala_scalajs_runtime_AnonFunction16().init___Lscala_scalajs_js_Function16((function(f$7) {
    return (function(x1, x2, x3, x4, x5, x6, x7, x8, x9, x10, x11, x12, x13, x14, x15, x16) {
      return f$7(x1, x2, x3, x4, x5, x6, x7, x8, x9, x10, x11, x12, x13, x14, x15, x16)
    })
  })(f))
});
ScalaJS.c.scala_scalajs_js_Any$.prototype.toFunction17__Lscala_scalajs_js_Function17__Lscala_Function17 = (function(f) {
  return new ScalaJS.c.scala_scalajs_runtime_AnonFunction17().init___Lscala_scalajs_js_Function17((function(f$6) {
    return (function(x1, x2, x3, x4, x5, x6, x7, x8, x9, x10, x11, x12, x13, x14, x15, x16, x17) {
      return f$6(x1, x2, x3, x4, x5, x6, x7, x8, x9, x10, x11, x12, x13, x14, x15, x16, x17)
    })
  })(f))
});
ScalaJS.c.scala_scalajs_js_Any$.prototype.toFunction18__Lscala_scalajs_js_Function18__Lscala_Function18 = (function(f) {
  return new ScalaJS.c.scala_scalajs_runtime_AnonFunction18().init___Lscala_scalajs_js_Function18((function(f$5) {
    return (function(x1, x2, x3, x4, x5, x6, x7, x8, x9, x10, x11, x12, x13, x14, x15, x16, x17, x18) {
      return f$5(x1, x2, x3, x4, x5, x6, x7, x8, x9, x10, x11, x12, x13, x14, x15, x16, x17, x18)
    })
  })(f))
});
ScalaJS.c.scala_scalajs_js_Any$.prototype.toFunction19__Lscala_scalajs_js_Function19__Lscala_Function19 = (function(f) {
  return new ScalaJS.c.scala_scalajs_runtime_AnonFunction19().init___Lscala_scalajs_js_Function19((function(f$4) {
    return (function(x1, x2, x3, x4, x5, x6, x7, x8, x9, x10, x11, x12, x13, x14, x15, x16, x17, x18, x19) {
      return f$4(x1, x2, x3, x4, x5, x6, x7, x8, x9, x10, x11, x12, x13, x14, x15, x16, x17, x18, x19)
    })
  })(f))
});
ScalaJS.c.scala_scalajs_js_Any$.prototype.toFunction20__Lscala_scalajs_js_Function20__Lscala_Function20 = (function(f) {
  return new ScalaJS.c.scala_scalajs_runtime_AnonFunction20().init___Lscala_scalajs_js_Function20((function(f$3) {
    return (function(x1, x2, x3, x4, x5, x6, x7, x8, x9, x10, x11, x12, x13, x14, x15, x16, x17, x18, x19, x20) {
      return f$3(x1, x2, x3, x4, x5, x6, x7, x8, x9, x10, x11, x12, x13, x14, x15, x16, x17, x18, x19, x20)
    })
  })(f))
});
ScalaJS.c.scala_scalajs_js_Any$.prototype.toFunction21__Lscala_scalajs_js_Function21__Lscala_Function21 = (function(f) {
  return new ScalaJS.c.scala_scalajs_runtime_AnonFunction21().init___Lscala_scalajs_js_Function21((function(f$2) {
    return (function(x1, x2, x3, x4, x5, x6, x7, x8, x9, x10, x11, x12, x13, x14, x15, x16, x17, x18, x19, x20, x21) {
      return f$2(x1, x2, x3, x4, x5, x6, x7, x8, x9, x10, x11, x12, x13, x14, x15, x16, x17, x18, x19, x20, x21)
    })
  })(f))
});
ScalaJS.c.scala_scalajs_js_Any$.prototype.toFunction22__Lscala_scalajs_js_Function22__Lscala_Function22 = (function(f) {
  return new ScalaJS.c.scala_scalajs_runtime_AnonFunction22().init___Lscala_scalajs_js_Function22((function(f$1) {
    return (function(x1, x2, x3, x4, x5, x6, x7, x8, x9, x10, x11, x12, x13, x14, x15, x16, x17, x18, x19, x20, x21, x22) {
      return f$1(x1, x2, x3, x4, x5, x6, x7, x8, x9, x10, x11, x12, x13, x14, x15, x16, x17, x18, x19, x20, x21, x22)
    })
  })(f))
});
ScalaJS.c.scala_scalajs_js_Any$.prototype.toFunction22__Lscala_scalajs_js_Function22__ = (function(f) {
  return this.toFunction22__Lscala_scalajs_js_Function22__Lscala_Function22(f)
});
ScalaJS.c.scala_scalajs_js_Any$.prototype.toFunction21__Lscala_scalajs_js_Function21__ = (function(f$2) {
  return this.toFunction21__Lscala_scalajs_js_Function21__Lscala_Function21(f$2)
});
ScalaJS.c.scala_scalajs_js_Any$.prototype.toFunction20__Lscala_scalajs_js_Function20__ = (function(f$3) {
  return this.toFunction20__Lscala_scalajs_js_Function20__Lscala_Function20(f$3)
});
ScalaJS.c.scala_scalajs_js_Any$.prototype.toFunction19__Lscala_scalajs_js_Function19__ = (function(f$4) {
  return this.toFunction19__Lscala_scalajs_js_Function19__Lscala_Function19(f$4)
});
ScalaJS.c.scala_scalajs_js_Any$.prototype.toFunction18__Lscala_scalajs_js_Function18__ = (function(f$5) {
  return this.toFunction18__Lscala_scalajs_js_Function18__Lscala_Function18(f$5)
});
ScalaJS.c.scala_scalajs_js_Any$.prototype.toFunction17__Lscala_scalajs_js_Function17__ = (function(f$6) {
  return this.toFunction17__Lscala_scalajs_js_Function17__Lscala_Function17(f$6)
});
ScalaJS.c.scala_scalajs_js_Any$.prototype.toFunction16__Lscala_scalajs_js_Function16__ = (function(f$7) {
  return this.toFunction16__Lscala_scalajs_js_Function16__Lscala_Function16(f$7)
});
ScalaJS.c.scala_scalajs_js_Any$.prototype.toFunction15__Lscala_scalajs_js_Function15__ = (function(f$8) {
  return this.toFunction15__Lscala_scalajs_js_Function15__Lscala_Function15(f$8)
});
ScalaJS.c.scala_scalajs_js_Any$.prototype.toFunction14__Lscala_scalajs_js_Function14__ = (function(f$9) {
  return this.toFunction14__Lscala_scalajs_js_Function14__Lscala_Function14(f$9)
});
ScalaJS.c.scala_scalajs_js_Any$.prototype.toFunction13__Lscala_scalajs_js_Function13__ = (function(f$10) {
  return this.toFunction13__Lscala_scalajs_js_Function13__Lscala_Function13(f$10)
});
ScalaJS.c.scala_scalajs_js_Any$.prototype.toFunction12__Lscala_scalajs_js_Function12__ = (function(f$11) {
  return this.toFunction12__Lscala_scalajs_js_Function12__Lscala_Function12(f$11)
});
ScalaJS.c.scala_scalajs_js_Any$.prototype.toFunction11__Lscala_scalajs_js_Function11__ = (function(f$12) {
  return this.toFunction11__Lscala_scalajs_js_Function11__Lscala_Function11(f$12)
});
ScalaJS.c.scala_scalajs_js_Any$.prototype.toFunction10__Lscala_scalajs_js_Function10__ = (function(f$13) {
  return this.toFunction10__Lscala_scalajs_js_Function10__Lscala_Function10(f$13)
});
ScalaJS.c.scala_scalajs_js_Any$.prototype.toFunction9__Lscala_scalajs_js_Function9__ = (function(f$14) {
  return this.toFunction9__Lscala_scalajs_js_Function9__Lscala_Function9(f$14)
});
ScalaJS.c.scala_scalajs_js_Any$.prototype.toFunction8__Lscala_scalajs_js_Function8__ = (function(f$15) {
  return this.toFunction8__Lscala_scalajs_js_Function8__Lscala_Function8(f$15)
});
ScalaJS.c.scala_scalajs_js_Any$.prototype.toFunction7__Lscala_scalajs_js_Function7__ = (function(f$16) {
  return this.toFunction7__Lscala_scalajs_js_Function7__Lscala_Function7(f$16)
});
ScalaJS.c.scala_scalajs_js_Any$.prototype.toFunction6__Lscala_scalajs_js_Function6__ = (function(f$17) {
  return this.toFunction6__Lscala_scalajs_js_Function6__Lscala_Function6(f$17)
});
ScalaJS.c.scala_scalajs_js_Any$.prototype.toFunction5__Lscala_scalajs_js_Function5__ = (function(f$18) {
  return this.toFunction5__Lscala_scalajs_js_Function5__Lscala_Function5(f$18)
});
ScalaJS.c.scala_scalajs_js_Any$.prototype.toFunction4__Lscala_scalajs_js_Function4__ = (function(f$19) {
  return this.toFunction4__Lscala_scalajs_js_Function4__Lscala_Function4(f$19)
});
ScalaJS.c.scala_scalajs_js_Any$.prototype.toFunction3__Lscala_scalajs_js_Function3__ = (function(f$20) {
  return this.toFunction3__Lscala_scalajs_js_Function3__Lscala_Function3(f$20)
});
ScalaJS.c.scala_scalajs_js_Any$.prototype.toFunction2__Lscala_scalajs_js_Function2__ = (function(f$21) {
  return this.toFunction2__Lscala_scalajs_js_Function2__Lscala_Function2(f$21)
});
ScalaJS.c.scala_scalajs_js_Any$.prototype.toFunction1__Lscala_scalajs_js_Function1__ = (function(f$22) {
  return this.toFunction1__Lscala_scalajs_js_Function1__Lscala_Function1(f$22)
});
ScalaJS.c.scala_scalajs_js_Any$.prototype.toFunction0__Lscala_scalajs_js_Function0__ = (function(f$23) {
  return this.toFunction0__Lscala_scalajs_js_Function0__Lscala_Function0(f$23)
});
ScalaJS.c.scala_scalajs_js_Any$.prototype.fromFunction22__Lscala_Function22__ = (function(f$24) {
  return this.fromFunction22__Lscala_Function22__Lscala_scalajs_js_Function22(f$24)
});
ScalaJS.c.scala_scalajs_js_Any$.prototype.fromFunction21__Lscala_Function21__ = (function(f$25) {
  return this.fromFunction21__Lscala_Function21__Lscala_scalajs_js_Function21(f$25)
});
ScalaJS.c.scala_scalajs_js_Any$.prototype.fromFunction20__Lscala_Function20__ = (function(f$26) {
  return this.fromFunction20__Lscala_Function20__Lscala_scalajs_js_Function20(f$26)
});
ScalaJS.c.scala_scalajs_js_Any$.prototype.fromFunction19__Lscala_Function19__ = (function(f$27) {
  return this.fromFunction19__Lscala_Function19__Lscala_scalajs_js_Function19(f$27)
});
ScalaJS.c.scala_scalajs_js_Any$.prototype.fromFunction18__Lscala_Function18__ = (function(f$28) {
  return this.fromFunction18__Lscala_Function18__Lscala_scalajs_js_Function18(f$28)
});
ScalaJS.c.scala_scalajs_js_Any$.prototype.fromFunction17__Lscala_Function17__ = (function(f$29) {
  return this.fromFunction17__Lscala_Function17__Lscala_scalajs_js_Function17(f$29)
});
ScalaJS.c.scala_scalajs_js_Any$.prototype.fromFunction16__Lscala_Function16__ = (function(f$30) {
  return this.fromFunction16__Lscala_Function16__Lscala_scalajs_js_Function16(f$30)
});
ScalaJS.c.scala_scalajs_js_Any$.prototype.fromFunction15__Lscala_Function15__ = (function(f$31) {
  return this.fromFunction15__Lscala_Function15__Lscala_scalajs_js_Function15(f$31)
});
ScalaJS.c.scala_scalajs_js_Any$.prototype.fromFunction14__Lscala_Function14__ = (function(f$32) {
  return this.fromFunction14__Lscala_Function14__Lscala_scalajs_js_Function14(f$32)
});
ScalaJS.c.scala_scalajs_js_Any$.prototype.fromFunction13__Lscala_Function13__ = (function(f$33) {
  return this.fromFunction13__Lscala_Function13__Lscala_scalajs_js_Function13(f$33)
});
ScalaJS.c.scala_scalajs_js_Any$.prototype.fromFunction12__Lscala_Function12__ = (function(f$34) {
  return this.fromFunction12__Lscala_Function12__Lscala_scalajs_js_Function12(f$34)
});
ScalaJS.c.scala_scalajs_js_Any$.prototype.fromFunction11__Lscala_Function11__ = (function(f$35) {
  return this.fromFunction11__Lscala_Function11__Lscala_scalajs_js_Function11(f$35)
});
ScalaJS.c.scala_scalajs_js_Any$.prototype.fromFunction10__Lscala_Function10__ = (function(f$36) {
  return this.fromFunction10__Lscala_Function10__Lscala_scalajs_js_Function10(f$36)
});
ScalaJS.c.scala_scalajs_js_Any$.prototype.fromFunction9__Lscala_Function9__ = (function(f$37) {
  return this.fromFunction9__Lscala_Function9__Lscala_scalajs_js_Function9(f$37)
});
ScalaJS.c.scala_scalajs_js_Any$.prototype.fromFunction8__Lscala_Function8__ = (function(f$38) {
  return this.fromFunction8__Lscala_Function8__Lscala_scalajs_js_Function8(f$38)
});
ScalaJS.c.scala_scalajs_js_Any$.prototype.fromFunction7__Lscala_Function7__ = (function(f$39) {
  return this.fromFunction7__Lscala_Function7__Lscala_scalajs_js_Function7(f$39)
});
ScalaJS.c.scala_scalajs_js_Any$.prototype.fromFunction6__Lscala_Function6__ = (function(f$40) {
  return this.fromFunction6__Lscala_Function6__Lscala_scalajs_js_Function6(f$40)
});
ScalaJS.c.scala_scalajs_js_Any$.prototype.fromFunction5__Lscala_Function5__ = (function(f$41) {
  return this.fromFunction5__Lscala_Function5__Lscala_scalajs_js_Function5(f$41)
});
ScalaJS.c.scala_scalajs_js_Any$.prototype.fromFunction4__Lscala_Function4__ = (function(f$42) {
  return this.fromFunction4__Lscala_Function4__Lscala_scalajs_js_Function4(f$42)
});
ScalaJS.c.scala_scalajs_js_Any$.prototype.fromFunction3__Lscala_Function3__ = (function(f$43) {
  return this.fromFunction3__Lscala_Function3__Lscala_scalajs_js_Function3(f$43)
});
ScalaJS.c.scala_scalajs_js_Any$.prototype.fromFunction2__Lscala_Function2__ = (function(f$44) {
  return this.fromFunction2__Lscala_Function2__Lscala_scalajs_js_Function2(f$44)
});
ScalaJS.c.scala_scalajs_js_Any$.prototype.fromFunction1__Lscala_Function1__ = (function(f$45) {
  return this.fromFunction1__Lscala_Function1__Lscala_scalajs_js_Function1(f$45)
});
ScalaJS.c.scala_scalajs_js_Any$.prototype.fromFunction0__Lscala_Function0__ = (function(f$46) {
  return this.fromFunction0__Lscala_Function0__Lscala_scalajs_js_Function0(f$46)
});
ScalaJS.c.scala_scalajs_js_Any$.prototype.richBoolean__Lscala_scalajs_js_Boolean__ = (function(b) {
  return new ScalaJS.c.scala_runtime_RichBoolean().init___Z(this.richBoolean__Lscala_scalajs_js_Boolean__Z(b))
});
ScalaJS.c.scala_scalajs_js_Any$.prototype.richDouble__Lscala_scalajs_js_Number__ = (function(num) {
  return new ScalaJS.c.scala_runtime_RichDouble().init___D(this.richDouble__Lscala_scalajs_js_Number__D(num))
});
ScalaJS.c.scala_scalajs_js_Any$.prototype.stringOps__Lscala_scalajs_js_String__ = (function(string) {
  return new ScalaJS.c.scala_collection_immutable_StringOps().init___T(this.stringOps__Lscala_scalajs_js_String__T(string))
});
ScalaJS.c.scala_scalajs_js_Any$.prototype.arrayOps__Lscala_scalajs_js_Array__Lscala_reflect_ClassTag__ = (function(array, evidence$2) {
  return this.arrayOps__Lscala_scalajs_js_Array__Lscala_reflect_ClassTag__Lscala_collection_mutable_ArrayOps(array, evidence$2)
});
ScalaJS.c.scala_scalajs_js_Any$.prototype.fromTraversableOnce__Lscala_collection_TraversableOnce__ = (function(col) {
  return this.fromTraversableOnce__Lscala_collection_TraversableOnce__Lscala_scalajs_js_Array(col)
});
ScalaJS.c.scala_scalajs_js_Any$.prototype.toArray__Lscala_scalajs_js_Array__Lscala_reflect_ClassTag__ = (function(array$2, evidence$1) {
  return this.toArray__Lscala_scalajs_js_Array__Lscala_reflect_ClassTag__O(array$2, evidence$1)
});
ScalaJS.c.scala_scalajs_js_Any$.prototype.fromArray__O__ = (function(array$3) {
  return this.fromArray__O__Lscala_scalajs_js_Array(array$3)
});
ScalaJS.c.scala_scalajs_js_Any$.prototype.fromString__T__ = (function(s) {
  return this.fromString__T__Lscala_scalajs_js_String(s)
});
ScalaJS.c.scala_scalajs_js_Any$.prototype.fromDouble__D__ = (function(value) {
  return this.fromDouble__D__Lscala_scalajs_js_Number(value)
});
ScalaJS.c.scala_scalajs_js_Any$.prototype.fromFloat__F__ = (function(value$2) {
  return this.fromFloat__F__Lscala_scalajs_js_Number(value$2)
});
ScalaJS.c.scala_scalajs_js_Any$.prototype.fromLong__J__ = (function(value$3) {
  return this.fromLong__J__Lscala_scalajs_js_Number(value$3)
});
ScalaJS.c.scala_scalajs_js_Any$.prototype.fromInt__I__ = (function(value$4) {
  return this.fromInt__I__Lscala_scalajs_js_Number(value$4)
});
ScalaJS.c.scala_scalajs_js_Any$.prototype.fromShort__S__ = (function(value$5) {
  return this.fromShort__S__Lscala_scalajs_js_Number(value$5)
});
ScalaJS.c.scala_scalajs_js_Any$.prototype.fromByte__B__ = (function(value$6) {
  return this.fromByte__B__Lscala_scalajs_js_Number(value$6)
});
ScalaJS.c.scala_scalajs_js_Any$.prototype.fromBoolean__Z__ = (function(value$7) {
  return this.fromBoolean__Z__Lscala_scalajs_js_Boolean(value$7)
});
ScalaJS.c.scala_scalajs_js_Any$.prototype.fromUnit__Lscala_runtime_BoxedUnit__ = (function(value$8) {
  return this.fromUnit__Lscala_runtime_BoxedUnit__Lscala_scalajs_js_Undefined(value$8)
});
/** @constructor */
ScalaJS.inheritable.scala_scalajs_js_Any$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_scalajs_js_Any$.prototype = ScalaJS.c.scala_scalajs_js_Any$.prototype;
ScalaJS.is.scala_scalajs_js_Any$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_scalajs_js_Any$)))
});
ScalaJS.as.scala_scalajs_js_Any$ = (function(obj) {
  if ((ScalaJS.is.scala_scalajs_js_Any$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.scalajs.js.Any")
  }
});
ScalaJS.isArrayOf.scala_scalajs_js_Any$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_scalajs_js_Any$)))
});
ScalaJS.asArrayOf.scala_scalajs_js_Any$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_scalajs_js_Any$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.scalajs.js.Any;", depth)
  }
});
ScalaJS.data.scala_scalajs_js_Any$ = new ScalaJS.ClassTypeData({
  scala_scalajs_js_Any$: 0
}, false, "scala.scalajs.js.Any$", ScalaJS.data.java_lang_Object, {
  scala_scalajs_js_Any$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_scalajs_js_Any$.prototype.$classData = ScalaJS.data.scala_scalajs_js_Any$;
ScalaJS.moduleInstances.scala_scalajs_js_Any = undefined;
ScalaJS.modules.scala_scalajs_js_Any = (function() {
  if ((!ScalaJS.moduleInstances.scala_scalajs_js_Any)) {
    ScalaJS.moduleInstances.scala_scalajs_js_Any = new ScalaJS.c.scala_scalajs_js_Any$().init___()
  };
  return ScalaJS.moduleInstances.scala_scalajs_js_Any
});
//@ sourceMappingURL=Any$.js.map
