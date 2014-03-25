/** @constructor */
ScalaJS.c.scala_collection_convert_Wrappers$MapWrapper$$anon$1$$anon$5$$anon$6 = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.$$outer$1 = null;
  this.k$1$1 = null;
  this.v$1$1 = null
});
ScalaJS.c.scala_collection_convert_Wrappers$MapWrapper$$anon$1$$anon$5$$anon$6.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_convert_Wrappers$MapWrapper$$anon$1$$anon$5$$anon$6.prototype.constructor = ScalaJS.c.scala_collection_convert_Wrappers$MapWrapper$$anon$1$$anon$5$$anon$6;
ScalaJS.c.scala_collection_convert_Wrappers$MapWrapper$$anon$1$$anon$5$$anon$6.prototype.getKey__O = (function() {
  return this.k$1$1
});
ScalaJS.c.scala_collection_convert_Wrappers$MapWrapper$$anon$1$$anon$5$$anon$6.prototype.getValue__O = (function() {
  return this.v$1$1
});
ScalaJS.c.scala_collection_convert_Wrappers$MapWrapper$$anon$1$$anon$5$$anon$6.prototype.setValue__O__O = (function(v1) {
  return this.$$outer$1.scala$collection$convert$Wrappers$MapWrapper$$anon$$anon$$$outer__Lscala_collection_convert_Wrappers$MapWrapper$$anon$1().scala$collection$convert$Wrappers$MapWrapper$$anon$$$outer__Lscala_collection_convert_Wrappers$MapWrapper().put__O__O__O(this.k$1$1, v1)
});
ScalaJS.c.scala_collection_convert_Wrappers$MapWrapper$$anon$1$$anon$5$$anon$6.prototype.hashCode__I = (function() {
  return (ScalaJS.modules.scala_util_hashing_package().byteswap32__I__I(ScalaJS.objectHashCode(this.k$1$1)) + (ScalaJS.modules.scala_util_hashing_package().byteswap32__I__I(ScalaJS.objectHashCode(this.v$1$1)) << 16))
});
ScalaJS.c.scala_collection_convert_Wrappers$MapWrapper$$anon$1$$anon$5$$anon$6.prototype.equals__O__Z = (function(other) {
  var x1 = other;
  if (ScalaJS.is.java_util_Map$Entry(x1)) {
    var x2 = ScalaJS.as.java_util_Map$Entry(x1);
    return (ScalaJS.anyEqEq(this.k$1$1, x2.getKey__O()) && ScalaJS.anyEqEq(this.v$1$1, x2.getValue__O()))
  };
  return false
});
ScalaJS.c.scala_collection_convert_Wrappers$MapWrapper$$anon$1$$anon$5$$anon$6.prototype.init___Lscala_collection_convert_Wrappers$MapWrapper$$anon$1$$anon$5__O__O = (function($$outer, k$1, v$1) {
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$1 = $$outer
  };
  this.k$1$1 = k$1;
  this.v$1$1 = v$1;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_collection_convert_Wrappers$MapWrapper$$anon$1$$anon$5$$anon$6.prototype.setValue__O__ = (function(v1) {
  return this.setValue__O__O(v1)
});
ScalaJS.c.scala_collection_convert_Wrappers$MapWrapper$$anon$1$$anon$5$$anon$6.prototype.getValue__ = (function() {
  return this.getValue__O()
});
ScalaJS.c.scala_collection_convert_Wrappers$MapWrapper$$anon$1$$anon$5$$anon$6.prototype.getKey__ = (function() {
  return this.getKey__O()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_convert_Wrappers$MapWrapper$$anon$1$$anon$5$$anon$6 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_convert_Wrappers$MapWrapper$$anon$1$$anon$5$$anon$6.prototype = ScalaJS.c.scala_collection_convert_Wrappers$MapWrapper$$anon$1$$anon$5$$anon$6.prototype;
ScalaJS.is.scala_collection_convert_Wrappers$MapWrapper$$anon$1$$anon$5$$anon$6 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_convert_Wrappers$MapWrapper$$anon$1$$anon$5$$anon$6)))
});
ScalaJS.as.scala_collection_convert_Wrappers$MapWrapper$$anon$1$$anon$5$$anon$6 = (function(obj) {
  if ((ScalaJS.is.scala_collection_convert_Wrappers$MapWrapper$$anon$1$$anon$5$$anon$6(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.convert.Wrappers$MapWrapper$$anon$1$$anon$5$$anon$6")
  }
});
ScalaJS.isArrayOf.scala_collection_convert_Wrappers$MapWrapper$$anon$1$$anon$5$$anon$6 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_convert_Wrappers$MapWrapper$$anon$1$$anon$5$$anon$6)))
});
ScalaJS.asArrayOf.scala_collection_convert_Wrappers$MapWrapper$$anon$1$$anon$5$$anon$6 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_convert_Wrappers$MapWrapper$$anon$1$$anon$5$$anon$6(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.convert.Wrappers$MapWrapper$$anon$1$$anon$5$$anon$6;", depth)
  }
});
ScalaJS.data.scala_collection_convert_Wrappers$MapWrapper$$anon$1$$anon$5$$anon$6 = new ScalaJS.ClassTypeData({
  scala_collection_convert_Wrappers$MapWrapper$$anon$1$$anon$5$$anon$6: 0
}, false, "scala.collection.convert.Wrappers$MapWrapper$$anon$1$$anon$5$$anon$6", ScalaJS.data.java_lang_Object, {
  scala_collection_convert_Wrappers$MapWrapper$$anon$1$$anon$5$$anon$6: 1,
  java_util_Map$Entry: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_convert_Wrappers$MapWrapper$$anon$1$$anon$5$$anon$6.prototype.$classData = ScalaJS.data.scala_collection_convert_Wrappers$MapWrapper$$anon$1$$anon$5$$anon$6;
//@ sourceMappingURL=Wrappers$MapWrapper$$anon$1$$anon$5$$anon$6.js.map
