/** @constructor */
ScalaJS.c.scala_util_MurmurHash$mcD$sp = (function() {
  ScalaJS.c.scala_util_MurmurHash.call(this);
  this.seed$2 = 0
});
ScalaJS.c.scala_util_MurmurHash$mcD$sp.prototype = new ScalaJS.inheritable.scala_util_MurmurHash();
ScalaJS.c.scala_util_MurmurHash$mcD$sp.prototype.constructor = ScalaJS.c.scala_util_MurmurHash$mcD$sp;
ScalaJS.c.scala_util_MurmurHash$mcD$sp.prototype.apply__D__V = (function(t) {
  this.apply$mcD$sp__D__V(t)
});
ScalaJS.c.scala_util_MurmurHash$mcD$sp.prototype.apply$mcD$sp__D__V = (function(t) {
  this.scala$util$MurmurHash$$h$und$eq__I__V(ScalaJS.modules.scala_util_MurmurHash().extendHash__I__I__I__I__I(this.scala$util$MurmurHash$$h__I(), ScalaJS.modules.scala_runtime_ScalaRunTime().hash__D__I(t), this.scala$util$MurmurHash$$c__I(), this.scala$util$MurmurHash$$k__I()));
  this.scala$util$MurmurHash$$c$und$eq__I__V(ScalaJS.modules.scala_util_MurmurHash().nextMagicA__I__I(this.scala$util$MurmurHash$$c__I()));
  this.scala$util$MurmurHash$$k$und$eq__I__V(ScalaJS.modules.scala_util_MurmurHash().nextMagicB__I__I(this.scala$util$MurmurHash$$k__I()));
  this.scala$util$MurmurHash$$hashed$und$eq__Z__V(false)
});
ScalaJS.c.scala_util_MurmurHash$mcD$sp.prototype.apply__O__O = (function(v1) {
  this.apply__D__V(ScalaJS.uD(v1));
  return ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
});
ScalaJS.c.scala_util_MurmurHash$mcD$sp.prototype.apply__O__V = (function(t) {
  this.apply__D__V(ScalaJS.uD(t))
});
ScalaJS.c.scala_util_MurmurHash$mcD$sp.prototype.init___I = (function(seed) {
  this.seed$2 = seed;
  ScalaJS.c.scala_util_MurmurHash.prototype.init___I.call(this, seed);
  ScalaJS.impls.scala_Function1$mcVD$sp$class__$init$__Lscala_Function1$mcVD$sp__V(this);
  return this
});
ScalaJS.c.scala_util_MurmurHash$mcD$sp.prototype.apply__D__ = (function(t) {
  return ScalaJS.bV(this.apply__D__V(t))
});
/** @constructor */
ScalaJS.inheritable.scala_util_MurmurHash$mcD$sp = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_util_MurmurHash$mcD$sp.prototype = ScalaJS.c.scala_util_MurmurHash$mcD$sp.prototype;
ScalaJS.is.scala_util_MurmurHash$mcD$sp = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_util_MurmurHash$mcD$sp)))
});
ScalaJS.as.scala_util_MurmurHash$mcD$sp = (function(obj) {
  if ((ScalaJS.is.scala_util_MurmurHash$mcD$sp(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.util.MurmurHash$mcD$sp")
  }
});
ScalaJS.isArrayOf.scala_util_MurmurHash$mcD$sp = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_util_MurmurHash$mcD$sp)))
});
ScalaJS.asArrayOf.scala_util_MurmurHash$mcD$sp = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_util_MurmurHash$mcD$sp(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.util.MurmurHash$mcD$sp;", depth)
  }
});
ScalaJS.data.scala_util_MurmurHash$mcD$sp = new ScalaJS.ClassTypeData({
  scala_util_MurmurHash$mcD$sp: 0
}, false, "scala.util.MurmurHash$mcD$sp", ScalaJS.data.scala_util_MurmurHash, {
  scala_util_MurmurHash$mcD$sp: 1,
  scala_Function1$mcVD$sp: 1,
  scala_util_MurmurHash: 1,
  scala_Function1: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_util_MurmurHash$mcD$sp.prototype.$classData = ScalaJS.data.scala_util_MurmurHash$mcD$sp;
//@ sourceMappingURL=MurmurHash$mcD$sp.js.map
