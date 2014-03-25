/** @constructor */
ScalaJS.c.scala_collection_generic_SliceInterval = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.from$1 = 0;
  this.until$1 = 0
});
ScalaJS.c.scala_collection_generic_SliceInterval.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_generic_SliceInterval.prototype.constructor = ScalaJS.c.scala_collection_generic_SliceInterval;
ScalaJS.c.scala_collection_generic_SliceInterval.prototype.from__I = (function() {
  return this.from$1
});
ScalaJS.c.scala_collection_generic_SliceInterval.prototype.until__I = (function() {
  return this.until$1
});
ScalaJS.c.scala_collection_generic_SliceInterval.prototype.width__I = (function() {
  return (this.until__I() - this.from__I())
});
ScalaJS.c.scala_collection_generic_SliceInterval.prototype.recalculate__I__I__Lscala_collection_generic_SliceInterval = (function(_from, _until) {
  var lo = ScalaJS.modules.scala_runtime_RichInt().max$extension__I__I__I(ScalaJS.modules.scala_Predef().intWrapper__I__I(_from), 0);
  var elems = ScalaJS.modules.scala_math_package().min__I__I__I((_until - lo), this.width__I());
  var start = (this.from__I() + lo);
  if ((elems <= 0)) {
    return new ScalaJS.c.scala_collection_generic_SliceInterval().init___I__I(this.from__I(), this.from__I())
  } else {
    return new ScalaJS.c.scala_collection_generic_SliceInterval().init___I__I(start, (start + elems))
  }
});
ScalaJS.c.scala_collection_generic_SliceInterval.prototype.recalculate__Lscala_collection_generic_SliceInterval__Lscala_collection_generic_SliceInterval = (function(interval) {
  return this.recalculate__I__I__Lscala_collection_generic_SliceInterval(interval.from__I(), interval.until__I())
});
ScalaJS.c.scala_collection_generic_SliceInterval.prototype.init___I__I = (function(from, until) {
  this.from$1 = from;
  this.until$1 = until;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_collection_generic_SliceInterval.prototype.recalculate__Lscala_collection_generic_SliceInterval__ = (function(interval) {
  return this.recalculate__Lscala_collection_generic_SliceInterval__Lscala_collection_generic_SliceInterval(interval)
});
ScalaJS.c.scala_collection_generic_SliceInterval.prototype.recalculate__I__I__ = (function(_from, _until) {
  return this.recalculate__I__I__Lscala_collection_generic_SliceInterval(_from, _until)
});
ScalaJS.c.scala_collection_generic_SliceInterval.prototype.width__ = (function() {
  return ScalaJS.bI(this.width__I())
});
ScalaJS.c.scala_collection_generic_SliceInterval.prototype.until__ = (function() {
  return ScalaJS.bI(this.until__I())
});
ScalaJS.c.scala_collection_generic_SliceInterval.prototype.from__ = (function() {
  return ScalaJS.bI(this.from__I())
});
/** @constructor */
ScalaJS.inheritable.scala_collection_generic_SliceInterval = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_generic_SliceInterval.prototype = ScalaJS.c.scala_collection_generic_SliceInterval.prototype;
ScalaJS.is.scala_collection_generic_SliceInterval = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_generic_SliceInterval)))
});
ScalaJS.as.scala_collection_generic_SliceInterval = (function(obj) {
  if ((ScalaJS.is.scala_collection_generic_SliceInterval(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.generic.SliceInterval")
  }
});
ScalaJS.isArrayOf.scala_collection_generic_SliceInterval = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_generic_SliceInterval)))
});
ScalaJS.asArrayOf.scala_collection_generic_SliceInterval = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_generic_SliceInterval(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.generic.SliceInterval;", depth)
  }
});
ScalaJS.data.scala_collection_generic_SliceInterval = new ScalaJS.ClassTypeData({
  scala_collection_generic_SliceInterval: 0
}, false, "scala.collection.generic.SliceInterval", ScalaJS.data.java_lang_Object, {
  scala_collection_generic_SliceInterval: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_generic_SliceInterval.prototype.$classData = ScalaJS.data.scala_collection_generic_SliceInterval;
//@ sourceMappingURL=SliceInterval.js.map
