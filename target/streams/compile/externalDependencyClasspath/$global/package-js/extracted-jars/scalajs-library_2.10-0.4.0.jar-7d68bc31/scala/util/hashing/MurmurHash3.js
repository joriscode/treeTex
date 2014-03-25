/** @constructor */
ScalaJS.c.scala_util_hashing_MurmurHash3 = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_util_hashing_MurmurHash3.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_util_hashing_MurmurHash3.prototype.constructor = ScalaJS.c.scala_util_hashing_MurmurHash3;
ScalaJS.c.scala_util_hashing_MurmurHash3.prototype.mix__I__I__I = (function(hash, data) {
  var h = this.mixLast__I__I__I(hash, data);
  h = ScalaJS.modules.java_lang_Integer().rotateLeft__I__I__I(h, 13);
  return ((h * 5) + -430675100)
});
ScalaJS.c.scala_util_hashing_MurmurHash3.prototype.mixLast__I__I__I = (function(hash, data) {
  var k = data;
  k = (k * -862048943);
  k = ScalaJS.modules.java_lang_Integer().rotateLeft__I__I__I(k, 15);
  k = (k * 461845907);
  return (hash ^ k)
});
ScalaJS.c.scala_util_hashing_MurmurHash3.prototype.finalizeHash__I__I__I = (function(hash, length) {
  return this.avalanche__p1__I__I((hash ^ length))
});
ScalaJS.c.scala_util_hashing_MurmurHash3.prototype.avalanche__p1__I__I = (function(hash) {
  var h = hash;
  h = (h ^ (h >>> 16));
  h = (h * -2048144789);
  h = (h ^ (h >>> 13));
  h = (h * -1028477387);
  h = (h ^ (h >>> 16));
  return h
});
ScalaJS.c.scala_util_hashing_MurmurHash3.prototype.productHash__Lscala_Product__I__I = (function(x, seed) {
  var arr = x.productArity__I();
  if ((arr === 0)) {
    return ScalaJS.objectHashCode(x.productPrefix__T())
  } else {
    var h = seed;
    var i = 0;
    while ((i < arr)) {
      h = this.mix__I__I__I(h, ScalaJS.modules.scala_runtime_ScalaRunTime().hash__O__I(x.productElement__I__O(i)));
      i = (i + 1)
    };
    return this.finalizeHash__I__I__I(h, arr)
  }
});
ScalaJS.c.scala_util_hashing_MurmurHash3.prototype.stringHash__T__I__I = (function(str, seed) {
  var h = seed;
  var i = 0;
  while (((i + 1) < ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__length__Lscala_scalajs_runtime_RuntimeString__I(str))) {
    var data = ((ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__charAt__Lscala_scalajs_runtime_RuntimeString__I__C(str, i) << 16) + ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__charAt__Lscala_scalajs_runtime_RuntimeString__I__C(str, (i + 1)));
    h = this.mix__I__I__I(h, data);
    i = (i + 2)
  };
  if ((i < ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__length__Lscala_scalajs_runtime_RuntimeString__I(str))) {
    h = this.mixLast__I__I__I(h, ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__charAt__Lscala_scalajs_runtime_RuntimeString__I__C(str, i))
  };
  return this.finalizeHash__I__I__I(h, ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__length__Lscala_scalajs_runtime_RuntimeString__I(str))
});
ScalaJS.c.scala_util_hashing_MurmurHash3.prototype.unorderedHash__Lscala_collection_TraversableOnce__I__I = (function(xs, seed) {
  var a = new ScalaJS.c.scala_runtime_IntRef().init___I(0);
  var b = new ScalaJS.c.scala_runtime_IntRef().init___I(0);
  var n = new ScalaJS.c.scala_runtime_IntRef().init___I(0);
  var c = new ScalaJS.c.scala_runtime_IntRef().init___I(1);
  xs.foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(a$1, b$1, n$1, c$1) {
    return (function(x) {
      var h = ScalaJS.modules.scala_runtime_ScalaRunTime().hash__O__I(x);
      a$1.elem$1 = (a$1.elem$1 + h);
      b$1.elem$1 = (b$1.elem$1 ^ h);
      if ((h !== 0)) {
        c$1.elem$1 = (c$1.elem$1 * h)
      };
      n$1.elem$1 = (n$1.elem$1 + 1);
      return ScalaJS.bV(undefined)
    })
  })(a, b, n, c)));
  var h = seed;
  h = this.mix__I__I__I(h, a.elem$1);
  h = this.mix__I__I__I(h, b.elem$1);
  h = this.mixLast__I__I__I(h, c.elem$1);
  return this.finalizeHash__I__I__I(h, n.elem$1)
});
ScalaJS.c.scala_util_hashing_MurmurHash3.prototype.orderedHash__Lscala_collection_TraversableOnce__I__I = (function(xs, seed) {
  var n = new ScalaJS.c.scala_runtime_IntRef().init___I(0);
  var h = new ScalaJS.c.scala_runtime_IntRef().init___I(seed);
  xs.foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer, n$2, h$1) {
    return (function(x$2) {
      h$1.elem$1 = arg$outer.mix__I__I__I(h$1.elem$1, ScalaJS.modules.scala_runtime_ScalaRunTime().hash__O__I(x$2));
      n$2.elem$1 = (n$2.elem$1 + 1);
      return ScalaJS.bV(undefined)
    })
  })(this, n, h)));
  return this.finalizeHash__I__I__I(h.elem$1, n.elem$1)
});
ScalaJS.c.scala_util_hashing_MurmurHash3.prototype.arrayHash__O__I__I = (function(a, seed) {
  var h = seed;
  var i = 0;
  while ((i < ScalaJS.modules.scala_runtime_ScalaRunTime().array$undlength__O__I(a))) {
    h = this.mix__I__I__I(h, ScalaJS.modules.scala_runtime_ScalaRunTime().hash__O__I(ScalaJS.modules.scala_runtime_ScalaRunTime().array$undapply__O__I__O(a, i)));
    i = (i + 1)
  };
  return this.finalizeHash__I__I__I(h, ScalaJS.modules.scala_runtime_ScalaRunTime().array$undlength__O__I(a))
});
ScalaJS.c.scala_util_hashing_MurmurHash3.prototype.bytesHash__AB__I__I = (function(data, seed) {
  var len = data.underlying.length;
  var h = seed;
  var i = 0;
  while ((len >= 4)) {
    var k = (data.underlying[(i + 0)] & 255);
    k = (k | ((data.underlying[(i + 1)] & 255) << 8));
    k = (k | ((data.underlying[(i + 2)] & 255) << 16));
    k = (k | ((data.underlying[(i + 3)] & 255) << 24));
    h = this.mix__I__I__I(h, k);
    i = (i + 4);
    len = (len - 4)
  };
  var k$2 = 0;
  if ((len === 3)) {
    k$2 = (k$2 ^ ((data.underlying[(i + 2)] & 255) << 16))
  };
  if ((len >= 2)) {
    k$2 = (k$2 ^ ((data.underlying[(i + 1)] & 255) << 8))
  };
  if ((len >= 1)) {
    k$2 = (k$2 ^ (data.underlying[(i + 0)] & 255));
    h = this.mixLast__I__I__I(h, k$2)
  };
  return this.finalizeHash__I__I__I(h, data.underlying.length)
});
ScalaJS.c.scala_util_hashing_MurmurHash3.prototype.listHash__Lscala_collection_immutable_List__I__I = (function(xs, seed) {
  var n = 0;
  var h = seed;
  var elems = xs;
  while ((!elems.isEmpty__Z())) {
    var head = elems.head__O();
    var tail = ScalaJS.as.scala_collection_immutable_List(elems.tail__O());
    h = this.mix__I__I__I(h, ScalaJS.modules.scala_runtime_ScalaRunTime().hash__O__I(head));
    n = (n + 1);
    elems = tail
  };
  return this.finalizeHash__I__I__I(h, n)
});
ScalaJS.c.scala_util_hashing_MurmurHash3.prototype.arrayHash$mZc$sp__AZ__I__I = (function(a, seed) {
  var h = seed;
  var i = 0;
  while ((i < a.underlying.length)) {
    var jsx$2 = h;
    if (a.underlying[i]) {
      var jsx$1 = 1231
    } else {
      var jsx$1 = 1237
    };
    h = this.mix__I__I__I(jsx$2, jsx$1);
    i = (i + 1)
  };
  return this.finalizeHash__I__I__I(h, a.underlying.length)
});
ScalaJS.c.scala_util_hashing_MurmurHash3.prototype.arrayHash$mBc$sp__AB__I__I = (function(a, seed) {
  var h = seed;
  var i = 0;
  while ((i < a.underlying.length)) {
    h = this.mix__I__I__I(h, a.underlying[i]);
    i = (i + 1)
  };
  return this.finalizeHash__I__I__I(h, a.underlying.length)
});
ScalaJS.c.scala_util_hashing_MurmurHash3.prototype.arrayHash$mCc$sp__AC__I__I = (function(a, seed) {
  var h = seed;
  var i = 0;
  while ((i < a.underlying.length)) {
    h = this.mix__I__I__I(h, a.underlying[i]);
    i = (i + 1)
  };
  return this.finalizeHash__I__I__I(h, a.underlying.length)
});
ScalaJS.c.scala_util_hashing_MurmurHash3.prototype.arrayHash$mDc$sp__AD__I__I = (function(a, seed) {
  var h = seed;
  var i = 0;
  while ((i < a.underlying.length)) {
    h = this.mix__I__I__I(h, ScalaJS.modules.scala_runtime_ScalaRunTime().hash__D__I(a.underlying[i]));
    i = (i + 1)
  };
  return this.finalizeHash__I__I__I(h, a.underlying.length)
});
ScalaJS.c.scala_util_hashing_MurmurHash3.prototype.arrayHash$mFc$sp__AF__I__I = (function(a, seed) {
  var h = seed;
  var i = 0;
  while ((i < a.underlying.length)) {
    h = this.mix__I__I__I(h, ScalaJS.modules.scala_runtime_ScalaRunTime().hash__F__I(a.underlying[i]));
    i = (i + 1)
  };
  return this.finalizeHash__I__I__I(h, a.underlying.length)
});
ScalaJS.c.scala_util_hashing_MurmurHash3.prototype.arrayHash$mIc$sp__AI__I__I = (function(a, seed) {
  var h = seed;
  var i = 0;
  while ((i < a.underlying.length)) {
    h = this.mix__I__I__I(h, a.underlying[i]);
    i = (i + 1)
  };
  return this.finalizeHash__I__I__I(h, a.underlying.length)
});
ScalaJS.c.scala_util_hashing_MurmurHash3.prototype.arrayHash$mJc$sp__AJ__I__I = (function(a, seed) {
  var h = seed;
  var i = 0;
  while ((i < a.underlying.length)) {
    h = this.mix__I__I__I(h, ScalaJS.modules.scala_runtime_ScalaRunTime().hash__J__I(a.underlying[i]));
    i = (i + 1)
  };
  return this.finalizeHash__I__I__I(h, a.underlying.length)
});
ScalaJS.c.scala_util_hashing_MurmurHash3.prototype.arrayHash$mSc$sp__AS__I__I = (function(a, seed) {
  var h = seed;
  var i = 0;
  while ((i < a.underlying.length)) {
    h = this.mix__I__I__I(h, a.underlying[i]);
    i = (i + 1)
  };
  return this.finalizeHash__I__I__I(h, a.underlying.length)
});
ScalaJS.c.scala_util_hashing_MurmurHash3.prototype.arrayHash$mVc$sp__ALscala_runtime_BoxedUnit__I__I = (function(a, seed) {
  var h = seed;
  var i = 0;
  while ((i < a.underlying.length)) {
    h = this.mix__I__I__I(h, 0);
    i = (i + 1)
  };
  return this.finalizeHash__I__I__I(h, a.underlying.length)
});
ScalaJS.c.scala_util_hashing_MurmurHash3.prototype.listHash__Lscala_collection_immutable_List__I__ = (function(xs, seed) {
  return ScalaJS.bI(this.listHash__Lscala_collection_immutable_List__I__I(xs, seed))
});
ScalaJS.c.scala_util_hashing_MurmurHash3.prototype.bytesHash__AB__I__ = (function(data, seed$2) {
  return ScalaJS.bI(this.bytesHash__AB__I__I(data, seed$2))
});
ScalaJS.c.scala_util_hashing_MurmurHash3.prototype.arrayHash$mVc$sp__ALscala_runtime_BoxedUnit__I__ = (function(a, seed$3) {
  return ScalaJS.bI(this.arrayHash$mVc$sp__ALscala_runtime_BoxedUnit__I__I(a, seed$3))
});
ScalaJS.c.scala_util_hashing_MurmurHash3.prototype.arrayHash$mSc$sp__AS__I__ = (function(a$2, seed$4) {
  return ScalaJS.bI(this.arrayHash$mSc$sp__AS__I__I(a$2, seed$4))
});
ScalaJS.c.scala_util_hashing_MurmurHash3.prototype.arrayHash$mJc$sp__AJ__I__ = (function(a$3, seed$5) {
  return ScalaJS.bI(this.arrayHash$mJc$sp__AJ__I__I(a$3, seed$5))
});
ScalaJS.c.scala_util_hashing_MurmurHash3.prototype.arrayHash$mIc$sp__AI__I__ = (function(a$4, seed$6) {
  return ScalaJS.bI(this.arrayHash$mIc$sp__AI__I__I(a$4, seed$6))
});
ScalaJS.c.scala_util_hashing_MurmurHash3.prototype.arrayHash$mFc$sp__AF__I__ = (function(a$5, seed$7) {
  return ScalaJS.bI(this.arrayHash$mFc$sp__AF__I__I(a$5, seed$7))
});
ScalaJS.c.scala_util_hashing_MurmurHash3.prototype.arrayHash$mDc$sp__AD__I__ = (function(a$6, seed$8) {
  return ScalaJS.bI(this.arrayHash$mDc$sp__AD__I__I(a$6, seed$8))
});
ScalaJS.c.scala_util_hashing_MurmurHash3.prototype.arrayHash$mCc$sp__AC__I__ = (function(a$7, seed$9) {
  return ScalaJS.bI(this.arrayHash$mCc$sp__AC__I__I(a$7, seed$9))
});
ScalaJS.c.scala_util_hashing_MurmurHash3.prototype.arrayHash$mBc$sp__AB__I__ = (function(a$8, seed$10) {
  return ScalaJS.bI(this.arrayHash$mBc$sp__AB__I__I(a$8, seed$10))
});
ScalaJS.c.scala_util_hashing_MurmurHash3.prototype.arrayHash$mZc$sp__AZ__I__ = (function(a$9, seed$11) {
  return ScalaJS.bI(this.arrayHash$mZc$sp__AZ__I__I(a$9, seed$11))
});
ScalaJS.c.scala_util_hashing_MurmurHash3.prototype.arrayHash__O__I__ = (function(a$10, seed$12) {
  return ScalaJS.bI(this.arrayHash__O__I__I(a$10, seed$12))
});
ScalaJS.c.scala_util_hashing_MurmurHash3.prototype.orderedHash__Lscala_collection_TraversableOnce__I__ = (function(xs$2, seed$13) {
  return ScalaJS.bI(this.orderedHash__Lscala_collection_TraversableOnce__I__I(xs$2, seed$13))
});
ScalaJS.c.scala_util_hashing_MurmurHash3.prototype.unorderedHash__Lscala_collection_TraversableOnce__I__ = (function(xs$3, seed$14) {
  return ScalaJS.bI(this.unorderedHash__Lscala_collection_TraversableOnce__I__I(xs$3, seed$14))
});
ScalaJS.c.scala_util_hashing_MurmurHash3.prototype.stringHash__T__I__ = (function(str, seed$15) {
  return ScalaJS.bI(this.stringHash__T__I__I(str, seed$15))
});
ScalaJS.c.scala_util_hashing_MurmurHash3.prototype.productHash__Lscala_Product__I__ = (function(x, seed$16) {
  return ScalaJS.bI(this.productHash__Lscala_Product__I__I(x, seed$16))
});
ScalaJS.c.scala_util_hashing_MurmurHash3.prototype.finalizeHash__I__I__ = (function(hash, length) {
  return ScalaJS.bI(this.finalizeHash__I__I__I(hash, length))
});
ScalaJS.c.scala_util_hashing_MurmurHash3.prototype.mixLast__I__I__ = (function(hash$2, data$2) {
  return ScalaJS.bI(this.mixLast__I__I__I(hash$2, data$2))
});
ScalaJS.c.scala_util_hashing_MurmurHash3.prototype.mix__I__I__ = (function(hash$3, data$3) {
  return ScalaJS.bI(this.mix__I__I__I(hash$3, data$3))
});
/** @constructor */
ScalaJS.inheritable.scala_util_hashing_MurmurHash3 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_util_hashing_MurmurHash3.prototype = ScalaJS.c.scala_util_hashing_MurmurHash3.prototype;
ScalaJS.is.scala_util_hashing_MurmurHash3 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_util_hashing_MurmurHash3)))
});
ScalaJS.as.scala_util_hashing_MurmurHash3 = (function(obj) {
  if ((ScalaJS.is.scala_util_hashing_MurmurHash3(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.util.hashing.MurmurHash3")
  }
});
ScalaJS.isArrayOf.scala_util_hashing_MurmurHash3 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_util_hashing_MurmurHash3)))
});
ScalaJS.asArrayOf.scala_util_hashing_MurmurHash3 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_util_hashing_MurmurHash3(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.util.hashing.MurmurHash3;", depth)
  }
});
ScalaJS.data.scala_util_hashing_MurmurHash3 = new ScalaJS.ClassTypeData({
  scala_util_hashing_MurmurHash3: 0
}, false, "scala.util.hashing.MurmurHash3", ScalaJS.data.java_lang_Object, {
  scala_util_hashing_MurmurHash3: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_util_hashing_MurmurHash3.prototype.$classData = ScalaJS.data.scala_util_hashing_MurmurHash3;
//@ sourceMappingURL=MurmurHash3.js.map
