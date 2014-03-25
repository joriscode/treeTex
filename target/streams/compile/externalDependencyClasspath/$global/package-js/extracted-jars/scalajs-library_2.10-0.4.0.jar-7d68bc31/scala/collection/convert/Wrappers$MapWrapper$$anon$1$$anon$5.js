/** @constructor */
ScalaJS.c.scala_collection_convert_Wrappers$MapWrapper$$anon$1$$anon$5 = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.ui$1 = null;
  this.prev$1 = null;
  this.$$outer$1 = null
});
ScalaJS.c.scala_collection_convert_Wrappers$MapWrapper$$anon$1$$anon$5.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_convert_Wrappers$MapWrapper$$anon$1$$anon$5.prototype.constructor = ScalaJS.c.scala_collection_convert_Wrappers$MapWrapper$$anon$1$$anon$5;
ScalaJS.c.scala_collection_convert_Wrappers$MapWrapper$$anon$1$$anon$5.prototype.ui__p1__Lscala_collection_Iterator = (function() {
  return this.ui$1
});
ScalaJS.c.scala_collection_convert_Wrappers$MapWrapper$$anon$1$$anon$5.prototype.prev__p1__Lscala_Option = (function() {
  return this.prev$1
});
ScalaJS.c.scala_collection_convert_Wrappers$MapWrapper$$anon$1$$anon$5.prototype.prev$und$eq__p1__Lscala_Option__V = (function(x$1) {
  this.prev$1 = x$1
});
ScalaJS.c.scala_collection_convert_Wrappers$MapWrapper$$anon$1$$anon$5.prototype.hasNext__Z = (function() {
  return this.ui__p1__Lscala_collection_Iterator().hasNext__Z()
});
ScalaJS.c.scala_collection_convert_Wrappers$MapWrapper$$anon$1$$anon$5.prototype.next__Ljava_util_Map$Entry = (function() {
  var x1 = ScalaJS.as.scala_Tuple2(this.ui__p1__Lscala_collection_Iterator().next__O());
  matchEnd3: {
    if ((x1 !== null)) {
      var k = x1.$$und1__O();
      var v = x1.$$und2__O();
      var x$2 = new ScalaJS.c.scala_Tuple2().init___O__O(k, v);
      break matchEnd3
    };
    throw new ScalaJS.c.scala_MatchError().init___O(x1)
  };
  var k$2 = x$2.$$und1__O();
  var v$2 = x$2.$$und2__O();
  this.prev$und$eq__p1__Lscala_Option__V(new ScalaJS.c.scala_Some().init___O(k$2));
  return new ScalaJS.c.scala_collection_convert_Wrappers$MapWrapper$$anon$1$$anon$5$$anon$6().init___Lscala_collection_convert_Wrappers$MapWrapper$$anon$1$$anon$5__O__O(this, k$2, v$2)
});
ScalaJS.c.scala_collection_convert_Wrappers$MapWrapper$$anon$1$$anon$5.prototype.remove__V = (function() {
  var x1 = this.prev__p1__Lscala_Option();
  matchEnd4: {
    if (ScalaJS.is.scala_Some(x1)) {
      var x2 = ScalaJS.as.scala_Some(x1);
      var k = x2.x__O();
      var x1$2 = this.$$outer$1.scala$collection$convert$Wrappers$MapWrapper$$anon$$$outer__Lscala_collection_convert_Wrappers$MapWrapper().scala$collection$convert$Wrappers$MapWrapper$$underlying$f;
      if (ScalaJS.is.scala_collection_mutable_Map(x1$2)) {
        var x2$2 = ScalaJS.as.scala_collection_mutable_Map(x1$2);
        x2$2.remove__O__Lscala_Option(k);
        this.prev$und$eq__p1__Lscala_Option__V(ScalaJS.modules.scala_None());
        ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
        break matchEnd4
      };
      throw new ScalaJS.c.java_lang_UnsupportedOperationException().init___T("remove")
    };
    throw new ScalaJS.c.java_lang_IllegalStateException().init___T("next must be called at least once before remove")
  }
});
ScalaJS.c.scala_collection_convert_Wrappers$MapWrapper$$anon$1$$anon$5.prototype.scala$collection$convert$Wrappers$MapWrapper$$anon$$anon$$$outer__Lscala_collection_convert_Wrappers$MapWrapper$$anon$1 = (function() {
  return this.$$outer$1
});
ScalaJS.c.scala_collection_convert_Wrappers$MapWrapper$$anon$1$$anon$5.prototype.next__O = (function() {
  return this.next__Ljava_util_Map$Entry()
});
ScalaJS.c.scala_collection_convert_Wrappers$MapWrapper$$anon$1$$anon$5.prototype.init___Lscala_collection_convert_Wrappers$MapWrapper$$anon$1 = (function($$outer) {
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$1 = $$outer
  };
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  this.ui$1 = $$outer.scala$collection$convert$Wrappers$MapWrapper$$anon$$$outer__Lscala_collection_convert_Wrappers$MapWrapper().scala$collection$convert$Wrappers$MapWrapper$$underlying$f.iterator__Lscala_collection_Iterator();
  this.prev$1 = ScalaJS.modules.scala_None();
  return this
});
ScalaJS.c.scala_collection_convert_Wrappers$MapWrapper$$anon$1$$anon$5.prototype.scala$collection$convert$Wrappers$MapWrapper$$anon$$anon$$$outer__ = (function() {
  return this.scala$collection$convert$Wrappers$MapWrapper$$anon$$anon$$$outer__Lscala_collection_convert_Wrappers$MapWrapper$$anon$1()
});
ScalaJS.c.scala_collection_convert_Wrappers$MapWrapper$$anon$1$$anon$5.prototype.remove__ = (function() {
  return ScalaJS.bV(this.remove__V())
});
ScalaJS.c.scala_collection_convert_Wrappers$MapWrapper$$anon$1$$anon$5.prototype.next__ = (function() {
  return this.next__Ljava_util_Map$Entry()
});
ScalaJS.c.scala_collection_convert_Wrappers$MapWrapper$$anon$1$$anon$5.prototype.hasNext__ = (function() {
  return ScalaJS.bZ(this.hasNext__Z())
});
/** @constructor */
ScalaJS.inheritable.scala_collection_convert_Wrappers$MapWrapper$$anon$1$$anon$5 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_convert_Wrappers$MapWrapper$$anon$1$$anon$5.prototype = ScalaJS.c.scala_collection_convert_Wrappers$MapWrapper$$anon$1$$anon$5.prototype;
ScalaJS.is.scala_collection_convert_Wrappers$MapWrapper$$anon$1$$anon$5 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_convert_Wrappers$MapWrapper$$anon$1$$anon$5)))
});
ScalaJS.as.scala_collection_convert_Wrappers$MapWrapper$$anon$1$$anon$5 = (function(obj) {
  if ((ScalaJS.is.scala_collection_convert_Wrappers$MapWrapper$$anon$1$$anon$5(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.convert.Wrappers$MapWrapper$$anon$1$$anon$5")
  }
});
ScalaJS.isArrayOf.scala_collection_convert_Wrappers$MapWrapper$$anon$1$$anon$5 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_convert_Wrappers$MapWrapper$$anon$1$$anon$5)))
});
ScalaJS.asArrayOf.scala_collection_convert_Wrappers$MapWrapper$$anon$1$$anon$5 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_convert_Wrappers$MapWrapper$$anon$1$$anon$5(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.convert.Wrappers$MapWrapper$$anon$1$$anon$5;", depth)
  }
});
ScalaJS.data.scala_collection_convert_Wrappers$MapWrapper$$anon$1$$anon$5 = new ScalaJS.ClassTypeData({
  scala_collection_convert_Wrappers$MapWrapper$$anon$1$$anon$5: 0
}, false, "scala.collection.convert.Wrappers$MapWrapper$$anon$1$$anon$5", ScalaJS.data.java_lang_Object, {
  scala_collection_convert_Wrappers$MapWrapper$$anon$1$$anon$5: 1,
  java_util_Iterator: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_convert_Wrappers$MapWrapper$$anon$1$$anon$5.prototype.$classData = ScalaJS.data.scala_collection_convert_Wrappers$MapWrapper$$anon$1$$anon$5;
//@ sourceMappingURL=Wrappers$MapWrapper$$anon$1$$anon$5.js.map
