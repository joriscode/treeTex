/** @constructor */
ScalaJS.c.scala_collection_convert_Wrappers$SetWrapper$$anon$4 = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.ui$1 = null;
  this.prev$1 = null;
  this.$$outer$1 = null
});
ScalaJS.c.scala_collection_convert_Wrappers$SetWrapper$$anon$4.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_convert_Wrappers$SetWrapper$$anon$4.prototype.constructor = ScalaJS.c.scala_collection_convert_Wrappers$SetWrapper$$anon$4;
ScalaJS.c.scala_collection_convert_Wrappers$SetWrapper$$anon$4.prototype.ui__p1__Lscala_collection_Iterator = (function() {
  return this.ui$1
});
ScalaJS.c.scala_collection_convert_Wrappers$SetWrapper$$anon$4.prototype.prev__p1__Lscala_Option = (function() {
  return this.prev$1
});
ScalaJS.c.scala_collection_convert_Wrappers$SetWrapper$$anon$4.prototype.prev$und$eq__p1__Lscala_Option__V = (function(x$1) {
  this.prev$1 = x$1
});
ScalaJS.c.scala_collection_convert_Wrappers$SetWrapper$$anon$4.prototype.hasNext__Z = (function() {
  return this.ui__p1__Lscala_collection_Iterator().hasNext__Z()
});
ScalaJS.c.scala_collection_convert_Wrappers$SetWrapper$$anon$4.prototype.next__O = (function() {
  var e = this.ui__p1__Lscala_collection_Iterator().next__O();
  this.prev$und$eq__p1__Lscala_Option__V(new ScalaJS.c.scala_Some().init___O(e));
  return e
});
ScalaJS.c.scala_collection_convert_Wrappers$SetWrapper$$anon$4.prototype.remove__V = (function() {
  var x1 = this.prev__p1__Lscala_Option();
  matchEnd4: {
    if (ScalaJS.is.scala_Some(x1)) {
      var x2 = ScalaJS.as.scala_Some(x1);
      var e = x2.x__O();
      var x1$2 = this.$$outer$1.scala$collection$convert$Wrappers$SetWrapper$$underlying$f;
      if (ScalaJS.is.scala_collection_mutable_Set(x1$2)) {
        var x2$2 = ScalaJS.as.scala_collection_mutable_Set(x1$2);
        x2$2.remove__O__Z(e);
        this.prev$und$eq__p1__Lscala_Option__V(ScalaJS.modules.scala_None());
        ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
        break matchEnd4
      };
      throw new ScalaJS.c.java_lang_UnsupportedOperationException().init___T("remove")
    };
    throw new ScalaJS.c.java_lang_IllegalStateException().init___T("next must be called at least once before remove")
  }
});
ScalaJS.c.scala_collection_convert_Wrappers$SetWrapper$$anon$4.prototype.init___Lscala_collection_convert_Wrappers$SetWrapper = (function($$outer) {
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$1 = $$outer
  };
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  this.ui$1 = $$outer.scala$collection$convert$Wrappers$SetWrapper$$underlying$f.iterator__Lscala_collection_Iterator();
  this.prev$1 = ScalaJS.modules.scala_None();
  return this
});
ScalaJS.c.scala_collection_convert_Wrappers$SetWrapper$$anon$4.prototype.remove__ = (function() {
  return ScalaJS.bV(this.remove__V())
});
ScalaJS.c.scala_collection_convert_Wrappers$SetWrapper$$anon$4.prototype.next__ = (function() {
  return this.next__O()
});
ScalaJS.c.scala_collection_convert_Wrappers$SetWrapper$$anon$4.prototype.hasNext__ = (function() {
  return ScalaJS.bZ(this.hasNext__Z())
});
/** @constructor */
ScalaJS.inheritable.scala_collection_convert_Wrappers$SetWrapper$$anon$4 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_convert_Wrappers$SetWrapper$$anon$4.prototype = ScalaJS.c.scala_collection_convert_Wrappers$SetWrapper$$anon$4.prototype;
ScalaJS.is.scala_collection_convert_Wrappers$SetWrapper$$anon$4 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_convert_Wrappers$SetWrapper$$anon$4)))
});
ScalaJS.as.scala_collection_convert_Wrappers$SetWrapper$$anon$4 = (function(obj) {
  if ((ScalaJS.is.scala_collection_convert_Wrappers$SetWrapper$$anon$4(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.convert.Wrappers$SetWrapper$$anon$4")
  }
});
ScalaJS.isArrayOf.scala_collection_convert_Wrappers$SetWrapper$$anon$4 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_convert_Wrappers$SetWrapper$$anon$4)))
});
ScalaJS.asArrayOf.scala_collection_convert_Wrappers$SetWrapper$$anon$4 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_convert_Wrappers$SetWrapper$$anon$4(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.convert.Wrappers$SetWrapper$$anon$4;", depth)
  }
});
ScalaJS.data.scala_collection_convert_Wrappers$SetWrapper$$anon$4 = new ScalaJS.ClassTypeData({
  scala_collection_convert_Wrappers$SetWrapper$$anon$4: 0
}, false, "scala.collection.convert.Wrappers$SetWrapper$$anon$4", ScalaJS.data.java_lang_Object, {
  scala_collection_convert_Wrappers$SetWrapper$$anon$4: 1,
  java_util_Iterator: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_convert_Wrappers$SetWrapper$$anon$4.prototype.$classData = ScalaJS.data.scala_collection_convert_Wrappers$SetWrapper$$anon$4;
//@ sourceMappingURL=Wrappers$SetWrapper$$anon$4.js.map
