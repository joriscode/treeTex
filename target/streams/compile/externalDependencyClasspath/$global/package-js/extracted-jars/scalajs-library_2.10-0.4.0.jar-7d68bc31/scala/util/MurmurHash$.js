/** @constructor */
ScalaJS.c.scala_util_MurmurHash$ = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.visibleMagic$1 = 0;
  this.hiddenMagicA$1 = 0;
  this.hiddenMagicB$1 = 0;
  this.visibleMixer$1 = 0;
  this.hiddenMixerA$1 = 0;
  this.hiddenMixerB$1 = 0;
  this.finalMixer1$1 = 0;
  this.finalMixer2$1 = 0;
  this.seedString$1 = 0;
  this.seedArray$1 = 0;
  this.storedMagicA$1 = null;
  this.storedMagicB$1 = null
});
ScalaJS.c.scala_util_MurmurHash$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_util_MurmurHash$.prototype.constructor = ScalaJS.c.scala_util_MurmurHash$;
ScalaJS.c.scala_util_MurmurHash$.prototype.visibleMagic__p1__I = (function() {
  return -1759636613
});
ScalaJS.c.scala_util_MurmurHash$.prototype.hiddenMagicA__p1__I = (function() {
  return -1789642873
});
ScalaJS.c.scala_util_MurmurHash$.prototype.hiddenMagicB__p1__I = (function() {
  return 718793509
});
ScalaJS.c.scala_util_MurmurHash$.prototype.visibleMixer__p1__I = (function() {
  return 1390208809
});
ScalaJS.c.scala_util_MurmurHash$.prototype.hiddenMixerA__p1__I = (function() {
  return 2071795100
});
ScalaJS.c.scala_util_MurmurHash$.prototype.hiddenMixerB__p1__I = (function() {
  return 1808688022
});
ScalaJS.c.scala_util_MurmurHash$.prototype.finalMixer1__p1__I = (function() {
  return -2048144789
});
ScalaJS.c.scala_util_MurmurHash$.prototype.finalMixer2__p1__I = (function() {
  return -1028477387
});
ScalaJS.c.scala_util_MurmurHash$.prototype.seedString__p1__I = (function() {
  return -137723950
});
ScalaJS.c.scala_util_MurmurHash$.prototype.seedArray__p1__I = (function() {
  return 1007110753
});
ScalaJS.c.scala_util_MurmurHash$.prototype.storedMagicA__AI = (function() {
  return this.storedMagicA$1
});
ScalaJS.c.scala_util_MurmurHash$.prototype.storedMagicB__AI = (function() {
  return this.storedMagicB$1
});
ScalaJS.c.scala_util_MurmurHash$.prototype.startHash__I__I = (function(seed) {
  return (seed ^ -1759636613)
});
ScalaJS.c.scala_util_MurmurHash$.prototype.startMagicA__I = (function() {
  return -1789642873
});
ScalaJS.c.scala_util_MurmurHash$.prototype.startMagicB__I = (function() {
  return 718793509
});
ScalaJS.c.scala_util_MurmurHash$.prototype.extendHash__I__I__I__I__I = (function(hash, value, magicA, magicB) {
  return (((hash ^ (ScalaJS.modules.java_lang_Integer().rotateLeft__I__I__I((value * magicA), 11) * magicB)) * 3) + 1390208809)
});
ScalaJS.c.scala_util_MurmurHash$.prototype.nextMagicA__I__I = (function(magicA) {
  return ((magicA * 5) + 2071795100)
});
ScalaJS.c.scala_util_MurmurHash$.prototype.nextMagicB__I__I = (function(magicB) {
  return ((magicB * 5) + 1808688022)
});
ScalaJS.c.scala_util_MurmurHash$.prototype.finalizeHash__I__I = (function(hash) {
  var i = (hash ^ (hash >>> 16));
  i = (i * -2048144789);
  i = (i ^ (i >>> 13));
  i = (i * -1028477387);
  i = (i ^ (i >>> 16));
  return i
});
ScalaJS.c.scala_util_MurmurHash$.prototype.arrayHash__O__I = (function(a) {
  var h = this.startHash__I__I((ScalaJS.modules.scala_runtime_ScalaRunTime().array$undlength__O__I(a) * 1007110753));
  var c = -1789642873;
  var k = 718793509;
  var j = 0;
  while ((j < ScalaJS.modules.scala_runtime_ScalaRunTime().array$undlength__O__I(a))) {
    h = this.extendHash__I__I__I__I__I(h, ScalaJS.modules.scala_runtime_ScalaRunTime().hash__O__I(ScalaJS.modules.scala_runtime_ScalaRunTime().array$undapply__O__I__O(a, j)), c, k);
    c = this.nextMagicA__I__I(c);
    k = this.nextMagicB__I__I(k);
    j = (j + 1)
  };
  return this.finalizeHash__I__I(h)
});
ScalaJS.c.scala_util_MurmurHash$.prototype.stringHash__T__I = (function(s) {
  var h = this.startHash__I__I((ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__length__Lscala_scalajs_runtime_RuntimeString__I(s) * -137723950));
  var c = -1789642873;
  var k = 718793509;
  var j = 0;
  while (((j + 1) < ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__length__Lscala_scalajs_runtime_RuntimeString__I(s))) {
    var i = ((ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__charAt__Lscala_scalajs_runtime_RuntimeString__I__C(s, j) << 16) + ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__charAt__Lscala_scalajs_runtime_RuntimeString__I__C(s, (j + 1)));
    h = this.extendHash__I__I__I__I__I(h, i, c, k);
    c = this.nextMagicA__I__I(c);
    k = this.nextMagicB__I__I(k);
    j = (j + 2)
  };
  if ((j < ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__length__Lscala_scalajs_runtime_RuntimeString__I(s))) {
    h = this.extendHash__I__I__I__I__I(h, ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__charAt__Lscala_scalajs_runtime_RuntimeString__I__C(s, j), c, k)
  };
  return this.finalizeHash__I__I(h)
});
ScalaJS.c.scala_util_MurmurHash$.prototype.symmetricHash__Lscala_collection_TraversableOnce__I__I = (function(xs, seed) {
  var a = new ScalaJS.c.scala_runtime_IntRef().init___I(0);
  var b = new ScalaJS.c.scala_runtime_IntRef().init___I(0);
  var n = new ScalaJS.c.scala_runtime_IntRef().init___I(0);
  var c = new ScalaJS.c.scala_runtime_IntRef().init___I(1);
  xs.seq__Lscala_collection_TraversableOnce().foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(a$1, b$1, n$1, c$1) {
    return (function(i) {
      var h = ScalaJS.modules.scala_runtime_ScalaRunTime().hash__O__I(i);
      a$1.elem$1 = (a$1.elem$1 + h);
      b$1.elem$1 = (b$1.elem$1 ^ h);
      if ((h !== 0)) {
        c$1.elem$1 = (c$1.elem$1 * h)
      };
      n$1.elem$1 = (n$1.elem$1 + 1);
      return ScalaJS.bV(undefined)
    })
  })(a, b, n, c)));
  var h = this.startHash__I__I((seed * n.elem$1));
  h = this.extendHash__I__I__I__I__I(h, a.elem$1, this.storedMagicA__AI().underlying[0], this.storedMagicB__AI().underlying[0]);
  h = this.extendHash__I__I__I__I__I(h, b.elem$1, this.storedMagicA__AI().underlying[1], this.storedMagicB__AI().underlying[1]);
  h = this.extendHash__I__I__I__I__I(h, c.elem$1, this.storedMagicA__AI().underlying[2], this.storedMagicB__AI().underlying[2]);
  return this.finalizeHash__I__I(h)
});
ScalaJS.c.scala_util_MurmurHash$.prototype.arrayHash$mZc$sp__AZ__I = (function(a) {
  var h = this.startHash__I__I((a.underlying.length * 1007110753));
  var c = -1789642873;
  var k = 718793509;
  var j = 0;
  while ((j < a.underlying.length)) {
    var jsx$2 = h;
    if (a.underlying[j]) {
      var jsx$1 = 1231
    } else {
      var jsx$1 = 1237
    };
    h = this.extendHash__I__I__I__I__I(jsx$2, jsx$1, c, k);
    c = this.nextMagicA__I__I(c);
    k = this.nextMagicB__I__I(k);
    j = (j + 1)
  };
  return this.finalizeHash__I__I(h)
});
ScalaJS.c.scala_util_MurmurHash$.prototype.arrayHash$mBc$sp__AB__I = (function(a) {
  var h = this.startHash__I__I((a.underlying.length * 1007110753));
  var c = -1789642873;
  var k = 718793509;
  var j = 0;
  while ((j < a.underlying.length)) {
    h = this.extendHash__I__I__I__I__I(h, a.underlying[j], c, k);
    c = this.nextMagicA__I__I(c);
    k = this.nextMagicB__I__I(k);
    j = (j + 1)
  };
  return this.finalizeHash__I__I(h)
});
ScalaJS.c.scala_util_MurmurHash$.prototype.arrayHash$mCc$sp__AC__I = (function(a) {
  var h = this.startHash__I__I((a.underlying.length * 1007110753));
  var c = -1789642873;
  var k = 718793509;
  var j = 0;
  while ((j < a.underlying.length)) {
    h = this.extendHash__I__I__I__I__I(h, a.underlying[j], c, k);
    c = this.nextMagicA__I__I(c);
    k = this.nextMagicB__I__I(k);
    j = (j + 1)
  };
  return this.finalizeHash__I__I(h)
});
ScalaJS.c.scala_util_MurmurHash$.prototype.arrayHash$mDc$sp__AD__I = (function(a) {
  var h = this.startHash__I__I((a.underlying.length * 1007110753));
  var c = -1789642873;
  var k = 718793509;
  var j = 0;
  while ((j < a.underlying.length)) {
    h = this.extendHash__I__I__I__I__I(h, ScalaJS.modules.scala_runtime_ScalaRunTime().hash__D__I(a.underlying[j]), c, k);
    c = this.nextMagicA__I__I(c);
    k = this.nextMagicB__I__I(k);
    j = (j + 1)
  };
  return this.finalizeHash__I__I(h)
});
ScalaJS.c.scala_util_MurmurHash$.prototype.arrayHash$mFc$sp__AF__I = (function(a) {
  var h = this.startHash__I__I((a.underlying.length * 1007110753));
  var c = -1789642873;
  var k = 718793509;
  var j = 0;
  while ((j < a.underlying.length)) {
    h = this.extendHash__I__I__I__I__I(h, ScalaJS.modules.scala_runtime_ScalaRunTime().hash__F__I(a.underlying[j]), c, k);
    c = this.nextMagicA__I__I(c);
    k = this.nextMagicB__I__I(k);
    j = (j + 1)
  };
  return this.finalizeHash__I__I(h)
});
ScalaJS.c.scala_util_MurmurHash$.prototype.arrayHash$mIc$sp__AI__I = (function(a) {
  var h = this.startHash__I__I((a.underlying.length * 1007110753));
  var c = -1789642873;
  var k = 718793509;
  var j = 0;
  while ((j < a.underlying.length)) {
    h = this.extendHash__I__I__I__I__I(h, a.underlying[j], c, k);
    c = this.nextMagicA__I__I(c);
    k = this.nextMagicB__I__I(k);
    j = (j + 1)
  };
  return this.finalizeHash__I__I(h)
});
ScalaJS.c.scala_util_MurmurHash$.prototype.arrayHash$mJc$sp__AJ__I = (function(a) {
  var h = this.startHash__I__I((a.underlying.length * 1007110753));
  var c = -1789642873;
  var k = 718793509;
  var j = 0;
  while ((j < a.underlying.length)) {
    h = this.extendHash__I__I__I__I__I(h, ScalaJS.modules.scala_runtime_ScalaRunTime().hash__J__I(a.underlying[j]), c, k);
    c = this.nextMagicA__I__I(c);
    k = this.nextMagicB__I__I(k);
    j = (j + 1)
  };
  return this.finalizeHash__I__I(h)
});
ScalaJS.c.scala_util_MurmurHash$.prototype.arrayHash$mSc$sp__AS__I = (function(a) {
  var h = this.startHash__I__I((a.underlying.length * 1007110753));
  var c = -1789642873;
  var k = 718793509;
  var j = 0;
  while ((j < a.underlying.length)) {
    h = this.extendHash__I__I__I__I__I(h, a.underlying[j], c, k);
    c = this.nextMagicA__I__I(c);
    k = this.nextMagicB__I__I(k);
    j = (j + 1)
  };
  return this.finalizeHash__I__I(h)
});
ScalaJS.c.scala_util_MurmurHash$.prototype.arrayHash$mVc$sp__ALscala_runtime_BoxedUnit__I = (function(a) {
  var h = this.startHash__I__I((a.underlying.length * 1007110753));
  var c = -1789642873;
  var k = 718793509;
  var j = 0;
  while ((j < a.underlying.length)) {
    h = this.extendHash__I__I__I__I__I(h, 0, c, k);
    c = this.nextMagicA__I__I(c);
    k = this.nextMagicB__I__I(k);
    j = (j + 1)
  };
  return this.finalizeHash__I__I(h)
});
ScalaJS.c.scala_util_MurmurHash$.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.moduleInstances.scala_util_MurmurHash = this;
  this.storedMagicA$1 = ScalaJS.asArrayOf.scala_Int(ScalaJS.modules.scala_collection_Iterator().iterate__O__Lscala_Function1__Lscala_collection_Iterator(ScalaJS.bI(-1789642873), new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
    return (function(magicA) {
      magicA = ScalaJS.uI(magicA);
      return ScalaJS.bI(ScalaJS.modules.scala_util_MurmurHash().nextMagicA__I__I(magicA))
    })
  })())).take__I__Lscala_collection_Iterator(23).toArray__Lscala_reflect_ClassTag__O(ScalaJS.modules.scala_reflect_ClassTag().Int__Lscala_reflect_ClassTag()), 1);
  this.storedMagicB$1 = ScalaJS.asArrayOf.scala_Int(ScalaJS.modules.scala_collection_Iterator().iterate__O__Lscala_Function1__Lscala_collection_Iterator(ScalaJS.bI(718793509), new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
    return (function(magicB) {
      magicB = ScalaJS.uI(magicB);
      return ScalaJS.bI(ScalaJS.modules.scala_util_MurmurHash().nextMagicB__I__I(magicB))
    })
  })())).take__I__Lscala_collection_Iterator(23).toArray__Lscala_reflect_ClassTag__O(ScalaJS.modules.scala_reflect_ClassTag().Int__Lscala_reflect_ClassTag()), 1);
  return this
});
ScalaJS.c.scala_util_MurmurHash$.prototype.symmetricHash__Lscala_collection_TraversableOnce__I__ = (function(xs, seed) {
  return ScalaJS.bI(this.symmetricHash__Lscala_collection_TraversableOnce__I__I(xs, seed))
});
ScalaJS.c.scala_util_MurmurHash$.prototype.stringHash__T__ = (function(s) {
  return ScalaJS.bI(this.stringHash__T__I(s))
});
ScalaJS.c.scala_util_MurmurHash$.prototype.arrayHash$mVc$sp__ALscala_runtime_BoxedUnit__ = (function(a) {
  return ScalaJS.bI(this.arrayHash$mVc$sp__ALscala_runtime_BoxedUnit__I(a))
});
ScalaJS.c.scala_util_MurmurHash$.prototype.arrayHash$mSc$sp__AS__ = (function(a$2) {
  return ScalaJS.bI(this.arrayHash$mSc$sp__AS__I(a$2))
});
ScalaJS.c.scala_util_MurmurHash$.prototype.arrayHash$mJc$sp__AJ__ = (function(a$3) {
  return ScalaJS.bI(this.arrayHash$mJc$sp__AJ__I(a$3))
});
ScalaJS.c.scala_util_MurmurHash$.prototype.arrayHash$mIc$sp__AI__ = (function(a$4) {
  return ScalaJS.bI(this.arrayHash$mIc$sp__AI__I(a$4))
});
ScalaJS.c.scala_util_MurmurHash$.prototype.arrayHash$mFc$sp__AF__ = (function(a$5) {
  return ScalaJS.bI(this.arrayHash$mFc$sp__AF__I(a$5))
});
ScalaJS.c.scala_util_MurmurHash$.prototype.arrayHash$mDc$sp__AD__ = (function(a$6) {
  return ScalaJS.bI(this.arrayHash$mDc$sp__AD__I(a$6))
});
ScalaJS.c.scala_util_MurmurHash$.prototype.arrayHash$mCc$sp__AC__ = (function(a$7) {
  return ScalaJS.bI(this.arrayHash$mCc$sp__AC__I(a$7))
});
ScalaJS.c.scala_util_MurmurHash$.prototype.arrayHash$mBc$sp__AB__ = (function(a$8) {
  return ScalaJS.bI(this.arrayHash$mBc$sp__AB__I(a$8))
});
ScalaJS.c.scala_util_MurmurHash$.prototype.arrayHash$mZc$sp__AZ__ = (function(a$9) {
  return ScalaJS.bI(this.arrayHash$mZc$sp__AZ__I(a$9))
});
ScalaJS.c.scala_util_MurmurHash$.prototype.arrayHash__O__ = (function(a$10) {
  return ScalaJS.bI(this.arrayHash__O__I(a$10))
});
ScalaJS.c.scala_util_MurmurHash$.prototype.finalizeHash__I__ = (function(hash) {
  return ScalaJS.bI(this.finalizeHash__I__I(hash))
});
ScalaJS.c.scala_util_MurmurHash$.prototype.nextMagicB__I__ = (function(magicB) {
  return ScalaJS.bI(this.nextMagicB__I__I(magicB))
});
ScalaJS.c.scala_util_MurmurHash$.prototype.nextMagicA__I__ = (function(magicA) {
  return ScalaJS.bI(this.nextMagicA__I__I(magicA))
});
ScalaJS.c.scala_util_MurmurHash$.prototype.extendHash__I__I__I__I__ = (function(hash$2, value, magicA$2, magicB$2) {
  return ScalaJS.bI(this.extendHash__I__I__I__I__I(hash$2, value, magicA$2, magicB$2))
});
ScalaJS.c.scala_util_MurmurHash$.prototype.startMagicB__ = (function() {
  return ScalaJS.bI(this.startMagicB__I())
});
ScalaJS.c.scala_util_MurmurHash$.prototype.startMagicA__ = (function() {
  return ScalaJS.bI(this.startMagicA__I())
});
ScalaJS.c.scala_util_MurmurHash$.prototype.startHash__I__ = (function(seed$2) {
  return ScalaJS.bI(this.startHash__I__I(seed$2))
});
ScalaJS.c.scala_util_MurmurHash$.prototype.storedMagicB__ = (function() {
  return this.storedMagicB__AI()
});
ScalaJS.c.scala_util_MurmurHash$.prototype.storedMagicA__ = (function() {
  return this.storedMagicA__AI()
});
/** @constructor */
ScalaJS.inheritable.scala_util_MurmurHash$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_util_MurmurHash$.prototype = ScalaJS.c.scala_util_MurmurHash$.prototype;
ScalaJS.is.scala_util_MurmurHash$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_util_MurmurHash$)))
});
ScalaJS.as.scala_util_MurmurHash$ = (function(obj) {
  if ((ScalaJS.is.scala_util_MurmurHash$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.util.MurmurHash")
  }
});
ScalaJS.isArrayOf.scala_util_MurmurHash$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_util_MurmurHash$)))
});
ScalaJS.asArrayOf.scala_util_MurmurHash$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_util_MurmurHash$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.util.MurmurHash;", depth)
  }
});
ScalaJS.data.scala_util_MurmurHash$ = new ScalaJS.ClassTypeData({
  scala_util_MurmurHash$: 0
}, false, "scala.util.MurmurHash$", ScalaJS.data.java_lang_Object, {
  scala_util_MurmurHash$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_util_MurmurHash$.prototype.$classData = ScalaJS.data.scala_util_MurmurHash$;
ScalaJS.moduleInstances.scala_util_MurmurHash = undefined;
ScalaJS.modules.scala_util_MurmurHash = (function() {
  if ((!ScalaJS.moduleInstances.scala_util_MurmurHash)) {
    ScalaJS.moduleInstances.scala_util_MurmurHash = new ScalaJS.c.scala_util_MurmurHash$().init___()
  };
  return ScalaJS.moduleInstances.scala_util_MurmurHash
});
//@ sourceMappingURL=MurmurHash$.js.map
