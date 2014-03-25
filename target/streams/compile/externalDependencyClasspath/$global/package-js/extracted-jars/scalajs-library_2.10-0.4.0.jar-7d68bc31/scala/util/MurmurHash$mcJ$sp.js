/** @constructor */
ScalaJS.c.scala_util_MurmurHash$mcJ$sp = (function() {
  ScalaJS.c.scala_util_MurmurHash.call(this);
  this.seed$2 = 0
});
ScalaJS.c.scala_util_MurmurHash$mcJ$sp.prototype = new ScalaJS.inheritable.scala_util_MurmurHash();
ScalaJS.c.scala_util_MurmurHash$mcJ$sp.prototype.constructor = ScalaJS.c.scala_util_MurmurHash$mcJ$sp;
ScalaJS.c.scala_util_MurmurHash$mcJ$sp.prototype.apply__J__V = (function(t$2) {
  this.apply$mcJ$sp__J__V(t$2)
});
ScalaJS.c.scala_util_MurmurHash$mcJ$sp.prototype.apply$mcJ$sp__J__V = (function(t) {
  this.scala$util$MurmurHash$$h$und$eq__I__V(ScalaJS.modules.scala_util_MurmurHash().extendHash__I__I__I__I__I(this.scala$util$MurmurHash$$h__I(), ScalaJS.modules.scala_runtime_ScalaRunTime().hash__J__I(t), this.scala$util$MurmurHash$$c__I(), this.scala$util$MurmurHash$$k__I()));
  this.scala$util$MurmurHash$$c$und$eq__I__V(ScalaJS.modules.scala_util_MurmurHash().nextMagicA__I__I(this.scala$util$MurmurHash$$c__I()));
  this.scala$util$MurmurHash$$k$und$eq__I__V(ScalaJS.modules.scala_util_MurmurHash().nextMagicB__I__I(this.scala$util$MurmurHash$$k__I()));
  this.scala$util$MurmurHash$$hashed$und$eq__Z__V(false)
});
ScalaJS.c.scala_util_MurmurHash$mcJ$sp.prototype.apply__O__O = (function(v1) {
  this.apply__J__V(ScalaJS.uJ(v1));
  return ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
});
ScalaJS.c.scala_util_MurmurHash$mcJ$sp.prototype.apply__O__V = (function(t) {
  this.apply__J__V(ScalaJS.uJ(t))
});
ScalaJS.c.scala_util_MurmurHash$mcJ$sp.prototype.init___I = (function(seed) {
  this.seed$2 = seed;
  ScalaJS.c.scala_util_MurmurHash.prototype.init___I.call(this, seed);
  ScalaJS.impls.scala_Function1$mcVJ$sp$class__$init$__Lscala_Function1$mcVJ$sp__V(this);
  return this
});
ScalaJS.c.scala_util_MurmurHash$mcJ$sp.prototype.apply__J__ = (function(t) {
  return ScalaJS.bV(this.apply__J__V(t))
});
/** @constructor */
ScalaJS.inheritable.scala_util_MurmurHash$mcJ$sp = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_util_MurmurHash$mcJ$sp.prototype = ScalaJS.c.scala_util_MurmurHash$mcJ$sp.prototype;
ScalaJS.is.scala_util_MurmurHash$mcJ$sp = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_util_MurmurHash$mcJ$sp)))
});
ScalaJS.as.scala_util_MurmurHash$mcJ$sp = (function(obj) {
  if ((ScalaJS.is.scala_util_MurmurHash$mcJ$sp(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.util.MurmurHash$mcJ$sp")
  }
});
ScalaJS.isArrayOf.scala_util_MurmurHash$mcJ$sp = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_util_MurmurHash$mcJ$sp)))
});
ScalaJS.asArrayOf.scala_util_MurmurHash$mcJ$sp = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_util_MurmurHash$mcJ$sp(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.util.MurmurHash$mcJ$sp;", depth)
  }
});
ScalaJS.data.scala_util_MurmurHash$mcJ$sp = new ScalaJS.ClassTypeData({
  scala_util_MurmurHash$mcJ$sp: 0
}, false, "scala.util.MurmurHash$mcJ$sp", ScalaJS.data.scala_util_MurmurHash, {
  scala_util_MurmurHash$mcJ$sp: 1,
  scala_Function1$mcVJ$sp: 1,
  scala_util_MurmurHash: 1,
  scala_Function1: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_util_MurmurHash$mcJ$sp.prototype.$classData = ScalaJS.data.scala_util_MurmurHash$mcJ$sp;
//@ sourceMappingURL=MurmurHash$mcJ$sp.js.map
