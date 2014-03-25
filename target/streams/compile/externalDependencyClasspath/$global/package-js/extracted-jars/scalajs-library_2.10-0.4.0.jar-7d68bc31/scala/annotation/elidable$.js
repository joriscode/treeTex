/** @constructor */
ScalaJS.c.scala_annotation_elidable$ = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.ALL$1 = 0;
  this.FINEST$1 = 0;
  this.FINER$1 = 0;
  this.FINE$1 = 0;
  this.CONFIG$1 = 0;
  this.INFO$1 = 0;
  this.WARNING$1 = 0;
  this.SEVERE$1 = 0;
  this.OFF$1 = 0;
  this.MAXIMUM$1 = 0;
  this.MINIMUM$1 = 0;
  this.ASSERTION$1 = 0;
  this.byName$1 = null
});
ScalaJS.c.scala_annotation_elidable$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_annotation_elidable$.prototype.constructor = ScalaJS.c.scala_annotation_elidable$;
ScalaJS.c.scala_annotation_elidable$.prototype.ALL__I = (function() {
  return -2147483648
});
ScalaJS.c.scala_annotation_elidable$.prototype.FINEST__I = (function() {
  return 300
});
ScalaJS.c.scala_annotation_elidable$.prototype.FINER__I = (function() {
  return 400
});
ScalaJS.c.scala_annotation_elidable$.prototype.FINE__I = (function() {
  return 500
});
ScalaJS.c.scala_annotation_elidable$.prototype.CONFIG__I = (function() {
  return 700
});
ScalaJS.c.scala_annotation_elidable$.prototype.INFO__I = (function() {
  return 800
});
ScalaJS.c.scala_annotation_elidable$.prototype.WARNING__I = (function() {
  return 900
});
ScalaJS.c.scala_annotation_elidable$.prototype.SEVERE__I = (function() {
  return 1000
});
ScalaJS.c.scala_annotation_elidable$.prototype.OFF__I = (function() {
  return 2147483647
});
ScalaJS.c.scala_annotation_elidable$.prototype.MAXIMUM__I = (function() {
  return 2147483647
});
ScalaJS.c.scala_annotation_elidable$.prototype.MINIMUM__I = (function() {
  return -2147483648
});
ScalaJS.c.scala_annotation_elidable$.prototype.ASSERTION__I = (function() {
  return 2000
});
ScalaJS.c.scala_annotation_elidable$.prototype.byName__Lscala_collection_immutable_Map = (function() {
  return this.byName$1
});
ScalaJS.c.scala_annotation_elidable$.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.moduleInstances.scala_annotation_elidable = this;
  this.byName$1 = ScalaJS.as.scala_collection_immutable_Map(ScalaJS.modules.scala_Predef().Map__Lscala_collection_immutable_Map$().apply__Lscala_collection_Seq__Lscala_collection_GenMap(ScalaJS.modules.scala_Predef().wrapRefArray__AO__Lscala_collection_mutable_WrappedArray(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.scala_Tuple2.getArrayOf(), [ScalaJS.modules.scala_Predef$ArrowAssoc().$$minus$greater$extension__O__O__Lscala_Tuple2(ScalaJS.modules.scala_Predef().any2ArrowAssoc__O__O("FINEST"), ScalaJS.bI(300)), ScalaJS.modules.scala_Predef$ArrowAssoc().$$minus$greater$extension__O__O__Lscala_Tuple2(ScalaJS.modules.scala_Predef().any2ArrowAssoc__O__O("FINER"), ScalaJS.bI(400)), ScalaJS.modules.scala_Predef$ArrowAssoc().$$minus$greater$extension__O__O__Lscala_Tuple2(ScalaJS.modules.scala_Predef().any2ArrowAssoc__O__O("FINE"), ScalaJS.bI(500)), ScalaJS.modules.scala_Predef$ArrowAssoc().$$minus$greater$extension__O__O__Lscala_Tuple2(ScalaJS.modules.scala_Predef().any2ArrowAssoc__O__O("CONFIG"), ScalaJS.bI(700)), ScalaJS.modules.scala_Predef$ArrowAssoc().$$minus$greater$extension__O__O__Lscala_Tuple2(ScalaJS.modules.scala_Predef().any2ArrowAssoc__O__O("INFO"), ScalaJS.bI(800)), ScalaJS.modules.scala_Predef$ArrowAssoc().$$minus$greater$extension__O__O__Lscala_Tuple2(ScalaJS.modules.scala_Predef().any2ArrowAssoc__O__O("WARNING"), ScalaJS.bI(900)), ScalaJS.modules.scala_Predef$ArrowAssoc().$$minus$greater$extension__O__O__Lscala_Tuple2(ScalaJS.modules.scala_Predef().any2ArrowAssoc__O__O("SEVERE"), ScalaJS.bI(1000)), ScalaJS.modules.scala_Predef$ArrowAssoc().$$minus$greater$extension__O__O__Lscala_Tuple2(ScalaJS.modules.scala_Predef().any2ArrowAssoc__O__O("ASSERTION"), ScalaJS.bI(2000)), ScalaJS.modules.scala_Predef$ArrowAssoc().$$minus$greater$extension__O__O__Lscala_Tuple2(ScalaJS.modules.scala_Predef().any2ArrowAssoc__O__O("ALL"), ScalaJS.bI(-2147483648)), ScalaJS.modules.scala_Predef$ArrowAssoc().$$minus$greater$extension__O__O__Lscala_Tuple2(ScalaJS.modules.scala_Predef().any2ArrowAssoc__O__O("OFF"), ScalaJS.bI(2147483647)), ScalaJS.modules.scala_Predef$ArrowAssoc().$$minus$greater$extension__O__O__Lscala_Tuple2(ScalaJS.modules.scala_Predef().any2ArrowAssoc__O__O("MAXIMUM"), ScalaJS.bI(2147483647)), ScalaJS.modules.scala_Predef$ArrowAssoc().$$minus$greater$extension__O__O__Lscala_Tuple2(ScalaJS.modules.scala_Predef().any2ArrowAssoc__O__O("MINIMUM"), ScalaJS.bI(-2147483648))]), 1))));
  return this
});
ScalaJS.c.scala_annotation_elidable$.prototype.byName__ = (function() {
  return this.byName__Lscala_collection_immutable_Map()
});
ScalaJS.c.scala_annotation_elidable$.prototype.ASSERTION__ = (function() {
  return ScalaJS.bI(this.ASSERTION__I())
});
ScalaJS.c.scala_annotation_elidable$.prototype.MINIMUM__ = (function() {
  return ScalaJS.bI(this.MINIMUM__I())
});
ScalaJS.c.scala_annotation_elidable$.prototype.MAXIMUM__ = (function() {
  return ScalaJS.bI(this.MAXIMUM__I())
});
ScalaJS.c.scala_annotation_elidable$.prototype.OFF__ = (function() {
  return ScalaJS.bI(this.OFF__I())
});
ScalaJS.c.scala_annotation_elidable$.prototype.SEVERE__ = (function() {
  return ScalaJS.bI(this.SEVERE__I())
});
ScalaJS.c.scala_annotation_elidable$.prototype.WARNING__ = (function() {
  return ScalaJS.bI(this.WARNING__I())
});
ScalaJS.c.scala_annotation_elidable$.prototype.INFO__ = (function() {
  return ScalaJS.bI(this.INFO__I())
});
ScalaJS.c.scala_annotation_elidable$.prototype.CONFIG__ = (function() {
  return ScalaJS.bI(this.CONFIG__I())
});
ScalaJS.c.scala_annotation_elidable$.prototype.FINE__ = (function() {
  return ScalaJS.bI(this.FINE__I())
});
ScalaJS.c.scala_annotation_elidable$.prototype.FINER__ = (function() {
  return ScalaJS.bI(this.FINER__I())
});
ScalaJS.c.scala_annotation_elidable$.prototype.FINEST__ = (function() {
  return ScalaJS.bI(this.FINEST__I())
});
ScalaJS.c.scala_annotation_elidable$.prototype.ALL__ = (function() {
  return ScalaJS.bI(this.ALL__I())
});
/** @constructor */
ScalaJS.inheritable.scala_annotation_elidable$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_annotation_elidable$.prototype = ScalaJS.c.scala_annotation_elidable$.prototype;
ScalaJS.is.scala_annotation_elidable$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_annotation_elidable$)))
});
ScalaJS.as.scala_annotation_elidable$ = (function(obj) {
  if ((ScalaJS.is.scala_annotation_elidable$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.annotation.elidable")
  }
});
ScalaJS.isArrayOf.scala_annotation_elidable$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_annotation_elidable$)))
});
ScalaJS.asArrayOf.scala_annotation_elidable$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_annotation_elidable$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.annotation.elidable;", depth)
  }
});
ScalaJS.data.scala_annotation_elidable$ = new ScalaJS.ClassTypeData({
  scala_annotation_elidable$: 0
}, false, "scala.annotation.elidable$", ScalaJS.data.java_lang_Object, {
  scala_annotation_elidable$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_annotation_elidable$.prototype.$classData = ScalaJS.data.scala_annotation_elidable$;
ScalaJS.moduleInstances.scala_annotation_elidable = undefined;
ScalaJS.modules.scala_annotation_elidable = (function() {
  if ((!ScalaJS.moduleInstances.scala_annotation_elidable)) {
    ScalaJS.moduleInstances.scala_annotation_elidable = new ScalaJS.c.scala_annotation_elidable$().init___()
  };
  return ScalaJS.moduleInstances.scala_annotation_elidable
});
//@ sourceMappingURL=elidable$.js.map
