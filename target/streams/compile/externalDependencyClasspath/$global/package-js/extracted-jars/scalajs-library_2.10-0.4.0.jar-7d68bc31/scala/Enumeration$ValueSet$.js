/** @constructor */
ScalaJS.c.scala_Enumeration$ValueSet$ = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.empty$1 = null;
  this.$$outer$1 = null
});
ScalaJS.c.scala_Enumeration$ValueSet$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_Enumeration$ValueSet$.prototype.constructor = ScalaJS.c.scala_Enumeration$ValueSet$;
ScalaJS.c.scala_Enumeration$ValueSet$.prototype.empty__Lscala_Enumeration$ValueSet = (function() {
  return this.empty$1
});
ScalaJS.c.scala_Enumeration$ValueSet$.prototype.apply__Lscala_collection_Seq__Lscala_Enumeration$ValueSet = (function(elems) {
  return ScalaJS.as.scala_Enumeration$ValueSet(ScalaJS.as.scala_collection_mutable_Builder(this.newBuilder__Lscala_collection_mutable_Builder().$$plus$plus$eq__Lscala_collection_TraversableOnce__Lscala_collection_generic_Growable(elems)).result__O())
});
ScalaJS.c.scala_Enumeration$ValueSet$.prototype.fromBitMask__AJ__Lscala_Enumeration$ValueSet = (function(elems) {
  return new ScalaJS.c.scala_Enumeration$ValueSet().init___Lscala_Enumeration__Lscala_collection_immutable_BitSet(this.$$outer$1, ScalaJS.modules.scala_collection_immutable_BitSet().fromBitMask__AJ__Lscala_collection_immutable_BitSet(elems))
});
ScalaJS.c.scala_Enumeration$ValueSet$.prototype.newBuilder__Lscala_collection_mutable_Builder = (function() {
  return new ScalaJS.c.scala_Enumeration$ValueSet$$anon$1().init___Lscala_Enumeration$ValueSet$(this)
});
ScalaJS.c.scala_Enumeration$ValueSet$.prototype.canBuildFrom__Lscala_collection_generic_CanBuildFrom = (function() {
  return new ScalaJS.c.scala_Enumeration$ValueSet$$anon$2().init___Lscala_Enumeration$ValueSet$(this)
});
ScalaJS.c.scala_Enumeration$ValueSet$.prototype.readResolve__p1__O = (function() {
  return this.$$outer$1.ValueSet__Lscala_Enumeration$ValueSet$()
});
ScalaJS.c.scala_Enumeration$ValueSet$.prototype.scala$Enumeration$ValueSet$$$outer__Lscala_Enumeration = (function() {
  return this.$$outer$1
});
ScalaJS.c.scala_Enumeration$ValueSet$.prototype.init___Lscala_Enumeration = (function($$outer) {
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$1 = $$outer
  };
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  this.empty$1 = new ScalaJS.c.scala_Enumeration$ValueSet().init___Lscala_Enumeration__Lscala_collection_immutable_BitSet($$outer, ScalaJS.modules.scala_collection_immutable_BitSet().empty__Lscala_collection_immutable_BitSet());
  return this
});
ScalaJS.c.scala_Enumeration$ValueSet$.prototype.scala$Enumeration$ValueSet$$$outer__ = (function() {
  return this.scala$Enumeration$ValueSet$$$outer__Lscala_Enumeration()
});
ScalaJS.c.scala_Enumeration$ValueSet$.prototype.canBuildFrom__ = (function() {
  return this.canBuildFrom__Lscala_collection_generic_CanBuildFrom()
});
ScalaJS.c.scala_Enumeration$ValueSet$.prototype.newBuilder__ = (function() {
  return this.newBuilder__Lscala_collection_mutable_Builder()
});
ScalaJS.c.scala_Enumeration$ValueSet$.prototype.fromBitMask__AJ__ = (function(elems) {
  return this.fromBitMask__AJ__Lscala_Enumeration$ValueSet(elems)
});
ScalaJS.c.scala_Enumeration$ValueSet$.prototype.apply__Lscala_collection_Seq__ = (function(elems$2) {
  return this.apply__Lscala_collection_Seq__Lscala_Enumeration$ValueSet(elems$2)
});
ScalaJS.c.scala_Enumeration$ValueSet$.prototype.empty__ = (function() {
  return this.empty__Lscala_Enumeration$ValueSet()
});
/** @constructor */
ScalaJS.inheritable.scala_Enumeration$ValueSet$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_Enumeration$ValueSet$.prototype = ScalaJS.c.scala_Enumeration$ValueSet$.prototype;
ScalaJS.is.scala_Enumeration$ValueSet$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_Enumeration$ValueSet$)))
});
ScalaJS.as.scala_Enumeration$ValueSet$ = (function(obj) {
  if ((ScalaJS.is.scala_Enumeration$ValueSet$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.Enumeration$ValueSet")
  }
});
ScalaJS.isArrayOf.scala_Enumeration$ValueSet$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_Enumeration$ValueSet$)))
});
ScalaJS.asArrayOf.scala_Enumeration$ValueSet$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_Enumeration$ValueSet$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.Enumeration$ValueSet;", depth)
  }
});
ScalaJS.data.scala_Enumeration$ValueSet$ = new ScalaJS.ClassTypeData({
  scala_Enumeration$ValueSet$: 0
}, false, "scala.Enumeration$ValueSet$", ScalaJS.data.java_lang_Object, {
  scala_Enumeration$ValueSet$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_Enumeration$ValueSet$.prototype.$classData = ScalaJS.data.scala_Enumeration$ValueSet$;
//@ sourceMappingURL=Enumeration$ValueSet$.js.map
