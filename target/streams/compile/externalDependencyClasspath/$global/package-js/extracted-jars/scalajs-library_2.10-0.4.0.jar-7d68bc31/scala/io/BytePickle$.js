/** @constructor */
ScalaJS.c.scala_io_BytePickle$ = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.REF$1 = 0;
  this.DEF$1 = 0
});
ScalaJS.c.scala_io_BytePickle$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_io_BytePickle$.prototype.constructor = ScalaJS.c.scala_io_BytePickle$;
ScalaJS.c.scala_io_BytePickle$.prototype.pickle__Lscala_io_BytePickle$SPU__O__AB = (function(p, a) {
  return p.appP__O__Lscala_io_BytePickle$PicklerState__Lscala_io_BytePickle$PicklerState(a, new ScalaJS.c.scala_io_BytePickle$PicklerState().init___AB__Lscala_io_BytePickle$PicklerEnv(ScalaJS.newArrayObject(ScalaJS.data.scala_Byte.getArrayOf(), [0]), new ScalaJS.c.scala_io_BytePickle$PicklerEnv().init___())).stream__AB()
});
ScalaJS.c.scala_io_BytePickle$.prototype.unpickle__Lscala_io_BytePickle$SPU__AB__O = (function(p, stream) {
  return p.appU__Lscala_io_BytePickle$UnPicklerState__Lscala_Tuple2(new ScalaJS.c.scala_io_BytePickle$UnPicklerState().init___AB__Lscala_io_BytePickle$UnPicklerEnv(stream, new ScalaJS.c.scala_io_BytePickle$UnPicklerEnv().init___())).$$und1__O()
});
ScalaJS.c.scala_io_BytePickle$.prototype.upickle__Lscala_io_BytePickle$PU__O__AB = (function(p, a) {
  return p.appP__O__AB__AB(a, ScalaJS.newArrayObject(ScalaJS.data.scala_Byte.getArrayOf(), [0]))
});
ScalaJS.c.scala_io_BytePickle$.prototype.uunpickle__Lscala_io_BytePickle$PU__AB__O = (function(p, stream) {
  return p.appU__AB__Lscala_Tuple2(stream).$$und1__O()
});
ScalaJS.c.scala_io_BytePickle$.prototype.refDef__Lscala_io_BytePickle$PU = (function() {
  return new ScalaJS.c.scala_io_BytePickle$$anon$1().init___()
});
ScalaJS.c.scala_io_BytePickle$.prototype.REF__I = (function() {
  return this.REF$1
});
ScalaJS.c.scala_io_BytePickle$.prototype.DEF__I = (function() {
  return this.DEF$1
});
ScalaJS.c.scala_io_BytePickle$.prototype.unat__Lscala_io_BytePickle$PU = (function() {
  return new ScalaJS.c.scala_io_BytePickle$$anon$2().init___()
});
ScalaJS.c.scala_io_BytePickle$.prototype.share__Lscala_io_BytePickle$SPU__Lscala_io_BytePickle$SPU = (function(pa) {
  return new ScalaJS.c.scala_io_BytePickle$$anon$3().init___Lscala_io_BytePickle$SPU(pa)
});
ScalaJS.c.scala_io_BytePickle$.prototype.ulift__O__Lscala_io_BytePickle$PU = (function(x) {
  return new ScalaJS.c.scala_io_BytePickle$$anon$4().init___O(x)
});
ScalaJS.c.scala_io_BytePickle$.prototype.lift__O__Lscala_io_BytePickle$SPU = (function(x) {
  return new ScalaJS.c.scala_io_BytePickle$$anon$5().init___O(x)
});
ScalaJS.c.scala_io_BytePickle$.prototype.usequ__Lscala_Function1__Lscala_io_BytePickle$PU__Lscala_Function1__Lscala_io_BytePickle$PU = (function(f, pa, k) {
  return new ScalaJS.c.scala_io_BytePickle$$anon$6().init___Lscala_Function1__Lscala_io_BytePickle$PU__Lscala_Function1(f, pa, k)
});
ScalaJS.c.scala_io_BytePickle$.prototype.sequ__Lscala_Function1__Lscala_io_BytePickle$SPU__Lscala_Function1__Lscala_io_BytePickle$SPU = (function(f, pa, k) {
  return new ScalaJS.c.scala_io_BytePickle$$anon$7().init___Lscala_Function1__Lscala_io_BytePickle$SPU__Lscala_Function1(f, pa, k)
});
ScalaJS.c.scala_io_BytePickle$.prototype.upair__Lscala_io_BytePickle$PU__Lscala_io_BytePickle$PU__Lscala_io_BytePickle$PU = (function(pa, pb) {
  return this.usequ__Lscala_Function1__Lscala_io_BytePickle$PU__Lscala_Function1__Lscala_io_BytePickle$PU(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
    return (function(p) {
      return ScalaJS.modules.scala_io_BytePickle().scala$io$BytePickle$$fst$1__Lscala_Tuple2__O(p)
    })
  })()), pa, new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(pb$1) {
    return (function(x) {
      return ScalaJS.modules.scala_io_BytePickle().usequ__Lscala_Function1__Lscala_io_BytePickle$PU__Lscala_Function1__Lscala_io_BytePickle$PU(new ScalaJS.c.scala_io_BytePickle$$anonfun$upair$2$$anonfun$apply$1().init___Lscala_io_BytePickle$$anonfun$upair$2(this), pb$1, new ScalaJS.c.scala_io_BytePickle$$anonfun$upair$2$$anonfun$apply$2().init___Lscala_io_BytePickle$$anonfun$upair$2__O(this, x))
    })
  })(pb)))
});
ScalaJS.c.scala_io_BytePickle$.prototype.pair__Lscala_io_BytePickle$SPU__Lscala_io_BytePickle$SPU__Lscala_io_BytePickle$SPU = (function(pa, pb) {
  return this.sequ__Lscala_Function1__Lscala_io_BytePickle$SPU__Lscala_Function1__Lscala_io_BytePickle$SPU(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
    return (function(p) {
      return ScalaJS.modules.scala_io_BytePickle().scala$io$BytePickle$$fst$2__Lscala_Tuple2__O(p)
    })
  })()), pa, new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(pb$2) {
    return (function(x) {
      return ScalaJS.modules.scala_io_BytePickle().sequ__Lscala_Function1__Lscala_io_BytePickle$SPU__Lscala_Function1__Lscala_io_BytePickle$SPU(new ScalaJS.c.scala_io_BytePickle$$anonfun$pair$2$$anonfun$apply$3().init___Lscala_io_BytePickle$$anonfun$pair$2(this), pb$2, new ScalaJS.c.scala_io_BytePickle$$anonfun$pair$2$$anonfun$apply$4().init___Lscala_io_BytePickle$$anonfun$pair$2__O(this, x))
    })
  })(pb)))
});
ScalaJS.c.scala_io_BytePickle$.prototype.triple__Lscala_io_BytePickle$SPU__Lscala_io_BytePickle$SPU__Lscala_io_BytePickle$SPU__Lscala_io_BytePickle$SPU = (function(pa, pb, pc) {
  return this.sequ__Lscala_Function1__Lscala_io_BytePickle$SPU__Lscala_Function1__Lscala_io_BytePickle$SPU(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
    return (function(p) {
      return ScalaJS.modules.scala_io_BytePickle().scala$io$BytePickle$$fst$3__Lscala_Tuple3__O(p)
    })
  })()), pa, new ScalaJS.c.scala_io_BytePickle$$anonfun$triple$2().init___Lscala_io_BytePickle$SPU__Lscala_io_BytePickle$SPU(pb, pc))
});
ScalaJS.c.scala_io_BytePickle$.prototype.uwrap__Lscala_Function1__Lscala_Function1__Lscala_io_BytePickle$PU__Lscala_io_BytePickle$PU = (function(i, j, pa) {
  return this.usequ__Lscala_Function1__Lscala_io_BytePickle$PU__Lscala_Function1__Lscala_io_BytePickle$PU(j, pa, new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(i$1) {
    return (function(x) {
      return ScalaJS.modules.scala_io_BytePickle().ulift__O__Lscala_io_BytePickle$PU(i$1.apply__O__O(x))
    })
  })(i)))
});
ScalaJS.c.scala_io_BytePickle$.prototype.wrap__Lscala_Function1__Lscala_Function1__Lscala_io_BytePickle$SPU__Lscala_io_BytePickle$SPU = (function(i, j, pa) {
  return this.sequ__Lscala_Function1__Lscala_io_BytePickle$SPU__Lscala_Function1__Lscala_io_BytePickle$SPU(j, pa, new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(i$2) {
    return (function(x) {
      return ScalaJS.modules.scala_io_BytePickle().lift__O__Lscala_io_BytePickle$SPU(i$2.apply__O__O(x))
    })
  })(i)))
});
ScalaJS.c.scala_io_BytePickle$.prototype.appendByte__AB__I__AB = (function(a, b) {
  return ScalaJS.asArrayOf.scala_Byte(ScalaJS.modules.scala_Array().concat__Lscala_collection_Seq__Lscala_reflect_ClassTag__O(ScalaJS.modules.scala_Predef().wrapRefArray__AO__Lscala_collection_mutable_WrappedArray(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.scala_Byte.getArrayOf().getArrayOf(), [a, ScalaJS.modules.scala_Array().apply__B__Lscala_collection_Seq__AB(b, ScalaJS.modules.scala_Predef().wrapByteArray__AB__Lscala_collection_mutable_WrappedArray(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.scala_Byte.getArrayOf(), [])))]), 1)), ScalaJS.modules.scala_reflect_ClassTag().Byte__Lscala_reflect_ClassTag()), 1)
});
ScalaJS.c.scala_io_BytePickle$.prototype.nat2Bytes__I__AB = (function(x) {
  var buf = new ScalaJS.c.scala_collection_mutable_ArrayBuffer().init___();
  var y = (x >>> 7);
  if ((y !== 0)) {
    this.writeNatPrefix$1__p1__I__Lscala_collection_mutable_ArrayBuffer__V(y, buf)
  };
  buf.$$plus$eq__O__Lscala_collection_mutable_ArrayBuffer(ScalaJS.bB((x & 127)));
  return ScalaJS.asArrayOf.scala_Byte(buf.toArray__Lscala_reflect_ClassTag__O(ScalaJS.modules.scala_reflect_ClassTag().Byte__Lscala_reflect_ClassTag()), 1)
});
ScalaJS.c.scala_io_BytePickle$.prototype.nat__Lscala_io_BytePickle$SPU = (function() {
  return new ScalaJS.c.scala_io_BytePickle$$anon$8().init___()
});
ScalaJS.c.scala_io_BytePickle$.prototype.$byte__Lscala_io_BytePickle$SPU = (function() {
  return new ScalaJS.c.scala_io_BytePickle$$anon$9().init___()
});
ScalaJS.c.scala_io_BytePickle$.prototype.string__Lscala_io_BytePickle$SPU = (function() {
  return this.share__Lscala_io_BytePickle$SPU__Lscala_io_BytePickle$SPU(this.wrap__Lscala_Function1__Lscala_Function1__Lscala_io_BytePickle$SPU__Lscala_io_BytePickle$SPU(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
    return (function(a) {
      return ScalaJS.modules.scala_Predef().charArrayOps__AC__Lscala_collection_mutable_ArrayOps(ScalaJS.modules.scala_io_Codec().fromUTF8__AB__AC(a)).mkString__T()
    })
  })()), new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
    return (function(s) {
      return ScalaJS.modules.scala_io_Codec().toUTF8__Ljava_lang_CharSequence__AB(s)
    })
  })()), this.bytearray__Lscala_io_BytePickle$SPU()))
});
ScalaJS.c.scala_io_BytePickle$.prototype.bytearray__Lscala_io_BytePickle$SPU = (function() {
  return this.wrap__Lscala_Function1__Lscala_Function1__Lscala_io_BytePickle$SPU__Lscala_io_BytePickle$SPU(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
    return (function(l) {
      return ScalaJS.asArrayOf.scala_Byte(l.toArray__Lscala_reflect_ClassTag__O(ScalaJS.modules.scala_reflect_ClassTag().Byte__Lscala_reflect_ClassTag()), 1)
    })
  })()), new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
    return (function(x$1) {
      return ScalaJS.modules.scala_Predef().byteArrayOps__AB__Lscala_collection_mutable_ArrayOps(x$1).toList__Lscala_collection_immutable_List()
    })
  })()), this.list__Lscala_io_BytePickle$SPU__Lscala_io_BytePickle$SPU(this.$byte__Lscala_io_BytePickle$SPU()))
});
ScalaJS.c.scala_io_BytePickle$.prototype.bool__Lscala_io_BytePickle$SPU = (function() {
  return this.wrap__Lscala_Function1__Lscala_Function1__Lscala_io_BytePickle$SPU__Lscala_io_BytePickle$SPU(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
    return (function(n) {
      n = ScalaJS.uI(n);
      return ScalaJS.bZ(ScalaJS.modules.scala_io_BytePickle().scala$io$BytePickle$$fromEnum$1__I__Z(n))
    })
  })()), new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
    return (function(b) {
      b = ScalaJS.uZ(b);
      return ScalaJS.bI(ScalaJS.modules.scala_io_BytePickle().scala$io$BytePickle$$toEnum$1__Z__I(b))
    })
  })()), this.nat__Lscala_io_BytePickle$SPU())
});
ScalaJS.c.scala_io_BytePickle$.prototype.ufixedList__Lscala_io_BytePickle$PU__I__Lscala_io_BytePickle$PU = (function(pa, n) {
  if ((n === 0)) {
    return this.ulift__O__Lscala_io_BytePickle$PU(ScalaJS.modules.scala_collection_immutable_Nil())
  } else {
    return this.uwrap__Lscala_Function1__Lscala_Function1__Lscala_io_BytePickle$PU__Lscala_io_BytePickle$PU(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
      return (function(p) {
        return ScalaJS.modules.scala_io_BytePickle().scala$io$BytePickle$$pairToList$1__Lscala_Tuple2__Lscala_collection_immutable_List(p)
      })
    })()), new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
      return (function(l) {
        return ScalaJS.modules.scala_io_BytePickle().scala$io$BytePickle$$listToPair$1__Lscala_collection_immutable_List__Lscala_Tuple2(l)
      })
    })()), this.upair__Lscala_io_BytePickle$PU__Lscala_io_BytePickle$PU__Lscala_io_BytePickle$PU(pa, this.ufixedList__Lscala_io_BytePickle$PU__I__Lscala_io_BytePickle$PU(pa, (n - 1))))
  }
});
ScalaJS.c.scala_io_BytePickle$.prototype.fixedList__Lscala_io_BytePickle$SPU__I__Lscala_io_BytePickle$SPU = (function(pa, n) {
  if ((n === 0)) {
    return this.lift__O__Lscala_io_BytePickle$SPU(ScalaJS.modules.scala_collection_immutable_Nil())
  } else {
    return this.wrap__Lscala_Function1__Lscala_Function1__Lscala_io_BytePickle$SPU__Lscala_io_BytePickle$SPU(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
      return (function(p) {
        return ScalaJS.modules.scala_io_BytePickle().scala$io$BytePickle$$pairToList$2__Lscala_Tuple2__Lscala_collection_immutable_List(p)
      })
    })()), new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
      return (function(l) {
        return ScalaJS.modules.scala_io_BytePickle().scala$io$BytePickle$$listToPair$2__Lscala_collection_immutable_List__Lscala_Tuple2(l)
      })
    })()), this.pair__Lscala_io_BytePickle$SPU__Lscala_io_BytePickle$SPU__Lscala_io_BytePickle$SPU(pa, this.fixedList__Lscala_io_BytePickle$SPU__I__Lscala_io_BytePickle$SPU(pa, (n - 1))))
  }
});
ScalaJS.c.scala_io_BytePickle$.prototype.list__Lscala_io_BytePickle$SPU__Lscala_io_BytePickle$SPU = (function(pa) {
  return this.sequ__Lscala_Function1__Lscala_io_BytePickle$SPU__Lscala_Function1__Lscala_io_BytePickle$SPU(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
    return (function(l) {
      return ScalaJS.bI(l.length__I())
    })
  })()), this.nat__Lscala_io_BytePickle$SPU(), new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(pa$4) {
    return (function(n) {
      n = ScalaJS.uI(n);
      return ScalaJS.modules.scala_io_BytePickle().fixedList__Lscala_io_BytePickle$SPU__I__Lscala_io_BytePickle$SPU(pa$4, n)
    })
  })(pa)))
});
ScalaJS.c.scala_io_BytePickle$.prototype.ulist__Lscala_io_BytePickle$PU__Lscala_io_BytePickle$PU = (function(pa) {
  return this.usequ__Lscala_Function1__Lscala_io_BytePickle$PU__Lscala_Function1__Lscala_io_BytePickle$PU(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
    return (function(l) {
      return ScalaJS.bI(l.length__I())
    })
  })()), this.unat__Lscala_io_BytePickle$PU(), new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(pa$5) {
    return (function(n) {
      n = ScalaJS.uI(n);
      return ScalaJS.modules.scala_io_BytePickle().ufixedList__Lscala_io_BytePickle$PU__I__Lscala_io_BytePickle$PU(pa$5, n)
    })
  })(pa)))
});
ScalaJS.c.scala_io_BytePickle$.prototype.data__Lscala_Function1__Lscala_collection_immutable_List__Lscala_io_BytePickle$SPU = (function(tag, ps) {
  return this.sequ__Lscala_Function1__Lscala_io_BytePickle$SPU__Lscala_Function1__Lscala_io_BytePickle$SPU(tag, this.nat__Lscala_io_BytePickle$SPU(), new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(ps$1) {
    return (function(x) {
      x = ScalaJS.uI(x);
      return ScalaJS.as.scala_io_BytePickle$SPU(ScalaJS.as.scala_Function0(ps$1.apply__I__O(x)).apply__O())
    })
  })(ps)))
});
ScalaJS.c.scala_io_BytePickle$.prototype.scala$io$BytePickle$$fst$1__Lscala_Tuple2__O = (function(p) {
  return p.$$und1__O()
});
ScalaJS.c.scala_io_BytePickle$.prototype.scala$io$BytePickle$$snd$1__Lscala_Tuple2__O = (function(p) {
  return p.$$und2__O()
});
ScalaJS.c.scala_io_BytePickle$.prototype.scala$io$BytePickle$$fst$2__Lscala_Tuple2__O = (function(p) {
  return p.$$und1__O()
});
ScalaJS.c.scala_io_BytePickle$.prototype.scala$io$BytePickle$$snd$2__Lscala_Tuple2__O = (function(p) {
  return p.$$und2__O()
});
ScalaJS.c.scala_io_BytePickle$.prototype.scala$io$BytePickle$$fst$3__Lscala_Tuple3__O = (function(p) {
  return p.$$und1__O()
});
ScalaJS.c.scala_io_BytePickle$.prototype.scala$io$BytePickle$$snd$3__Lscala_Tuple3__O = (function(p) {
  return p.$$und2__O()
});
ScalaJS.c.scala_io_BytePickle$.prototype.scala$io$BytePickle$$trd$1__Lscala_Tuple3__O = (function(p) {
  return p.$$und3__O()
});
ScalaJS.c.scala_io_BytePickle$.prototype.writeNatPrefix$1__p1__I__Lscala_collection_mutable_ArrayBuffer__V = (function(x, buf$1) {
  var y = (x >>> 7);
  if ((y !== 0)) {
    this.writeNatPrefix$1__p1__I__Lscala_collection_mutable_ArrayBuffer__V(y, buf$1)
  };
  buf$1.$$plus$eq__O__Lscala_collection_mutable_ArrayBuffer(ScalaJS.bB(((x & 127) | 128)))
});
ScalaJS.c.scala_io_BytePickle$.prototype.scala$io$BytePickle$$toEnum$1__Z__I = (function(b) {
  if (b) {
    return 1
  } else {
    return 0
  }
});
ScalaJS.c.scala_io_BytePickle$.prototype.scala$io$BytePickle$$fromEnum$1__I__Z = (function(n) {
  if ((n === 0)) {
    return false
  } else {
    return true
  }
});
ScalaJS.c.scala_io_BytePickle$.prototype.scala$io$BytePickle$$pairToList$1__Lscala_Tuple2__Lscala_collection_immutable_List = (function(p) {
  var x$2 = p.$$und1__O();
  return ScalaJS.as.scala_collection_immutable_List(p.$$und2__O()).$$colon$colon__O__Lscala_collection_immutable_List(x$2)
});
ScalaJS.c.scala_io_BytePickle$.prototype.scala$io$BytePickle$$listToPair$1__Lscala_collection_immutable_List__Lscala_Tuple2 = (function(l) {
  var x1 = l;
  if (ScalaJS.is.scala_collection_immutable_$colon$colon(x1)) {
    var x2 = ScalaJS.as.scala_collection_immutable_$colon$colon(x1);
    var x = x2.hd$1__O();
    var xs = x2.tl$1__Lscala_collection_immutable_List();
    return new ScalaJS.c.scala_Tuple2().init___O__O(x, xs)
  };
  throw new ScalaJS.c.scala_MatchError().init___O(x1)
});
ScalaJS.c.scala_io_BytePickle$.prototype.scala$io$BytePickle$$pairToList$2__Lscala_Tuple2__Lscala_collection_immutable_List = (function(p) {
  var x$3 = p.$$und1__O();
  return ScalaJS.as.scala_collection_immutable_List(p.$$und2__O()).$$colon$colon__O__Lscala_collection_immutable_List(x$3)
});
ScalaJS.c.scala_io_BytePickle$.prototype.scala$io$BytePickle$$listToPair$2__Lscala_collection_immutable_List__Lscala_Tuple2 = (function(l) {
  var x1 = l;
  if (ScalaJS.is.scala_collection_immutable_$colon$colon(x1)) {
    var x2 = ScalaJS.as.scala_collection_immutable_$colon$colon(x1);
    var x = x2.hd$1__O();
    var xs = x2.tl$1__Lscala_collection_immutable_List();
    return new ScalaJS.c.scala_Tuple2().init___O__O(x, xs)
  };
  throw new ScalaJS.c.scala_MatchError().init___O(x1)
});
ScalaJS.c.scala_io_BytePickle$.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.moduleInstances.scala_io_BytePickle = this;
  this.REF$1 = 0;
  this.DEF$1 = 1;
  return this
});
ScalaJS.c.scala_io_BytePickle$.prototype.scala$io$BytePickle$$listToPair$2__Lscala_collection_immutable_List__ = (function(l) {
  return this.scala$io$BytePickle$$listToPair$2__Lscala_collection_immutable_List__Lscala_Tuple2(l)
});
ScalaJS.c.scala_io_BytePickle$.prototype.scala$io$BytePickle$$pairToList$2__Lscala_Tuple2__ = (function(p) {
  return this.scala$io$BytePickle$$pairToList$2__Lscala_Tuple2__Lscala_collection_immutable_List(p)
});
ScalaJS.c.scala_io_BytePickle$.prototype.scala$io$BytePickle$$listToPair$1__Lscala_collection_immutable_List__ = (function(l$2) {
  return this.scala$io$BytePickle$$listToPair$1__Lscala_collection_immutable_List__Lscala_Tuple2(l$2)
});
ScalaJS.c.scala_io_BytePickle$.prototype.scala$io$BytePickle$$pairToList$1__Lscala_Tuple2__ = (function(p$2) {
  return this.scala$io$BytePickle$$pairToList$1__Lscala_Tuple2__Lscala_collection_immutable_List(p$2)
});
ScalaJS.c.scala_io_BytePickle$.prototype.scala$io$BytePickle$$fromEnum$1__I__ = (function(n) {
  return ScalaJS.bZ(this.scala$io$BytePickle$$fromEnum$1__I__Z(n))
});
ScalaJS.c.scala_io_BytePickle$.prototype.scala$io$BytePickle$$toEnum$1__Z__ = (function(b) {
  return ScalaJS.bI(this.scala$io$BytePickle$$toEnum$1__Z__I(b))
});
ScalaJS.c.scala_io_BytePickle$.prototype.scala$io$BytePickle$$trd$1__Lscala_Tuple3__ = (function(p$3) {
  return this.scala$io$BytePickle$$trd$1__Lscala_Tuple3__O(p$3)
});
ScalaJS.c.scala_io_BytePickle$.prototype.scala$io$BytePickle$$snd$3__Lscala_Tuple3__ = (function(p$4) {
  return this.scala$io$BytePickle$$snd$3__Lscala_Tuple3__O(p$4)
});
ScalaJS.c.scala_io_BytePickle$.prototype.scala$io$BytePickle$$fst$3__Lscala_Tuple3__ = (function(p$5) {
  return this.scala$io$BytePickle$$fst$3__Lscala_Tuple3__O(p$5)
});
ScalaJS.c.scala_io_BytePickle$.prototype.scala$io$BytePickle$$snd$2__Lscala_Tuple2__ = (function(p$6) {
  return this.scala$io$BytePickle$$snd$2__Lscala_Tuple2__O(p$6)
});
ScalaJS.c.scala_io_BytePickle$.prototype.scala$io$BytePickle$$fst$2__Lscala_Tuple2__ = (function(p$7) {
  return this.scala$io$BytePickle$$fst$2__Lscala_Tuple2__O(p$7)
});
ScalaJS.c.scala_io_BytePickle$.prototype.scala$io$BytePickle$$snd$1__Lscala_Tuple2__ = (function(p$8) {
  return this.scala$io$BytePickle$$snd$1__Lscala_Tuple2__O(p$8)
});
ScalaJS.c.scala_io_BytePickle$.prototype.scala$io$BytePickle$$fst$1__Lscala_Tuple2__ = (function(p$9) {
  return this.scala$io$BytePickle$$fst$1__Lscala_Tuple2__O(p$9)
});
ScalaJS.c.scala_io_BytePickle$.prototype.data__Lscala_Function1__Lscala_collection_immutable_List__ = (function(tag, ps) {
  return this.data__Lscala_Function1__Lscala_collection_immutable_List__Lscala_io_BytePickle$SPU(tag, ps)
});
ScalaJS.c.scala_io_BytePickle$.prototype.ulist__Lscala_io_BytePickle$PU__ = (function(pa) {
  return this.ulist__Lscala_io_BytePickle$PU__Lscala_io_BytePickle$PU(pa)
});
ScalaJS.c.scala_io_BytePickle$.prototype.list__Lscala_io_BytePickle$SPU__ = (function(pa$2) {
  return this.list__Lscala_io_BytePickle$SPU__Lscala_io_BytePickle$SPU(pa$2)
});
ScalaJS.c.scala_io_BytePickle$.prototype.fixedList__Lscala_io_BytePickle$SPU__I__ = (function(pa$3, n$2) {
  return this.fixedList__Lscala_io_BytePickle$SPU__I__Lscala_io_BytePickle$SPU(pa$3, n$2)
});
ScalaJS.c.scala_io_BytePickle$.prototype.ufixedList__Lscala_io_BytePickle$PU__I__ = (function(pa$4, n$3) {
  return this.ufixedList__Lscala_io_BytePickle$PU__I__Lscala_io_BytePickle$PU(pa$4, n$3)
});
ScalaJS.c.scala_io_BytePickle$.prototype.bool__ = (function() {
  return this.bool__Lscala_io_BytePickle$SPU()
});
ScalaJS.c.scala_io_BytePickle$.prototype.bytearray__ = (function() {
  return this.bytearray__Lscala_io_BytePickle$SPU()
});
ScalaJS.c.scala_io_BytePickle$.prototype.string__ = (function() {
  return this.string__Lscala_io_BytePickle$SPU()
});
ScalaJS.c.scala_io_BytePickle$.prototype.$byte__ = (function() {
  return this.$byte__Lscala_io_BytePickle$SPU()
});
ScalaJS.c.scala_io_BytePickle$.prototype.nat__ = (function() {
  return this.nat__Lscala_io_BytePickle$SPU()
});
ScalaJS.c.scala_io_BytePickle$.prototype.nat2Bytes__I__ = (function(x) {
  return this.nat2Bytes__I__AB(x)
});
ScalaJS.c.scala_io_BytePickle$.prototype.appendByte__AB__I__ = (function(a, b$2) {
  return this.appendByte__AB__I__AB(a, b$2)
});
ScalaJS.c.scala_io_BytePickle$.prototype.wrap__Lscala_Function1__Lscala_Function1__Lscala_io_BytePickle$SPU__ = (function(i, j, pa$5) {
  return this.wrap__Lscala_Function1__Lscala_Function1__Lscala_io_BytePickle$SPU__Lscala_io_BytePickle$SPU(i, j, pa$5)
});
ScalaJS.c.scala_io_BytePickle$.prototype.uwrap__Lscala_Function1__Lscala_Function1__Lscala_io_BytePickle$PU__ = (function(i$2, j$2, pa$6) {
  return this.uwrap__Lscala_Function1__Lscala_Function1__Lscala_io_BytePickle$PU__Lscala_io_BytePickle$PU(i$2, j$2, pa$6)
});
ScalaJS.c.scala_io_BytePickle$.prototype.triple__Lscala_io_BytePickle$SPU__Lscala_io_BytePickle$SPU__Lscala_io_BytePickle$SPU__ = (function(pa$7, pb, pc) {
  return this.triple__Lscala_io_BytePickle$SPU__Lscala_io_BytePickle$SPU__Lscala_io_BytePickle$SPU__Lscala_io_BytePickle$SPU(pa$7, pb, pc)
});
ScalaJS.c.scala_io_BytePickle$.prototype.pair__Lscala_io_BytePickle$SPU__Lscala_io_BytePickle$SPU__ = (function(pa$8, pb$2) {
  return this.pair__Lscala_io_BytePickle$SPU__Lscala_io_BytePickle$SPU__Lscala_io_BytePickle$SPU(pa$8, pb$2)
});
ScalaJS.c.scala_io_BytePickle$.prototype.upair__Lscala_io_BytePickle$PU__Lscala_io_BytePickle$PU__ = (function(pa$9, pb$3) {
  return this.upair__Lscala_io_BytePickle$PU__Lscala_io_BytePickle$PU__Lscala_io_BytePickle$PU(pa$9, pb$3)
});
ScalaJS.c.scala_io_BytePickle$.prototype.sequ__Lscala_Function1__Lscala_io_BytePickle$SPU__Lscala_Function1__ = (function(f, pa$10, k) {
  return this.sequ__Lscala_Function1__Lscala_io_BytePickle$SPU__Lscala_Function1__Lscala_io_BytePickle$SPU(f, pa$10, k)
});
ScalaJS.c.scala_io_BytePickle$.prototype.usequ__Lscala_Function1__Lscala_io_BytePickle$PU__Lscala_Function1__ = (function(f$2, pa$11, k$2) {
  return this.usequ__Lscala_Function1__Lscala_io_BytePickle$PU__Lscala_Function1__Lscala_io_BytePickle$PU(f$2, pa$11, k$2)
});
ScalaJS.c.scala_io_BytePickle$.prototype.lift__O__ = (function(x$2) {
  return this.lift__O__Lscala_io_BytePickle$SPU(x$2)
});
ScalaJS.c.scala_io_BytePickle$.prototype.ulift__O__ = (function(x$3) {
  return this.ulift__O__Lscala_io_BytePickle$PU(x$3)
});
ScalaJS.c.scala_io_BytePickle$.prototype.share__Lscala_io_BytePickle$SPU__ = (function(pa$12) {
  return this.share__Lscala_io_BytePickle$SPU__Lscala_io_BytePickle$SPU(pa$12)
});
ScalaJS.c.scala_io_BytePickle$.prototype.unat__ = (function() {
  return this.unat__Lscala_io_BytePickle$PU()
});
ScalaJS.c.scala_io_BytePickle$.prototype.DEF__ = (function() {
  return ScalaJS.bI(this.DEF__I())
});
ScalaJS.c.scala_io_BytePickle$.prototype.REF__ = (function() {
  return ScalaJS.bI(this.REF__I())
});
ScalaJS.c.scala_io_BytePickle$.prototype.refDef__ = (function() {
  return this.refDef__Lscala_io_BytePickle$PU()
});
ScalaJS.c.scala_io_BytePickle$.prototype.uunpickle__Lscala_io_BytePickle$PU__AB__ = (function(p$10, stream) {
  return this.uunpickle__Lscala_io_BytePickle$PU__AB__O(p$10, stream)
});
ScalaJS.c.scala_io_BytePickle$.prototype.upickle__Lscala_io_BytePickle$PU__O__ = (function(p$11, a$2) {
  return this.upickle__Lscala_io_BytePickle$PU__O__AB(p$11, a$2)
});
ScalaJS.c.scala_io_BytePickle$.prototype.unpickle__Lscala_io_BytePickle$SPU__AB__ = (function(p$12, stream$2) {
  return this.unpickle__Lscala_io_BytePickle$SPU__AB__O(p$12, stream$2)
});
ScalaJS.c.scala_io_BytePickle$.prototype.pickle__Lscala_io_BytePickle$SPU__O__ = (function(p$13, a$3) {
  return this.pickle__Lscala_io_BytePickle$SPU__O__AB(p$13, a$3)
});
/** @constructor */
ScalaJS.inheritable.scala_io_BytePickle$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_io_BytePickle$.prototype = ScalaJS.c.scala_io_BytePickle$.prototype;
ScalaJS.is.scala_io_BytePickle$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_io_BytePickle$)))
});
ScalaJS.as.scala_io_BytePickle$ = (function(obj) {
  if ((ScalaJS.is.scala_io_BytePickle$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.io.BytePickle")
  }
});
ScalaJS.isArrayOf.scala_io_BytePickle$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_io_BytePickle$)))
});
ScalaJS.asArrayOf.scala_io_BytePickle$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_io_BytePickle$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.io.BytePickle;", depth)
  }
});
ScalaJS.data.scala_io_BytePickle$ = new ScalaJS.ClassTypeData({
  scala_io_BytePickle$: 0
}, false, "scala.io.BytePickle$", ScalaJS.data.java_lang_Object, {
  scala_io_BytePickle$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_io_BytePickle$.prototype.$classData = ScalaJS.data.scala_io_BytePickle$;
ScalaJS.moduleInstances.scala_io_BytePickle = undefined;
ScalaJS.modules.scala_io_BytePickle = (function() {
  if ((!ScalaJS.moduleInstances.scala_io_BytePickle)) {
    ScalaJS.moduleInstances.scala_io_BytePickle = new ScalaJS.c.scala_io_BytePickle$().init___()
  };
  return ScalaJS.moduleInstances.scala_io_BytePickle
});
//@ sourceMappingURL=BytePickle$.js.map
